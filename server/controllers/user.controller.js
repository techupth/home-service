import { pool } from "../utils/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userController = {
  async register(req, res) {
    try {
      let password = req.body.password;
      //set password condition
      const passwordConditionCheck =
        /[A-Z]/g.test(password) &&
        /[a-z]/g.test(password) &&
        password.length >= 16;

      //Email form Validate
      const EMAIL_REGEX =
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const emailConditionCheck = EMAIL_REGEX.test(req.body.email);
      const alreadyHasEmail = await pool.query(
        "select * from users where email = $1",
        [req.body.email.toLowerCase()]
      );
      if (alreadyHasEmail.rows.length > 0) {
        return res.status(403).json({
          msg: "email already exists",
        });
      }

      if (!emailConditionCheck) {
        return res.status(403).json({
          msg: "invalid email",
        });
      }

      if (!passwordConditionCheck) {
        return res.status(403).json({
          msg: "password must greater then 15 character and contain uppercase and lower case",
        });
      }

      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      //prevent space on first letter
      if (/^\s/.test(req.body.fullname)) {
        return res.status(403).json({
          msg: "fullname must start with character",
        });
      }
      const splitedFullname = req.body.fullname.split(" ");
      const removeSpace = splitedFullname.filter((item) => item !== "");
      const firstName = removeSpace[0];
      const lastName = removeSpace[1];
      const roles = "customer";

      const user = await pool.query(
        `insert into users(email, password)
            values($1, $2) returning(user_id)`,
        [req.body.email.toLowerCase(), password]
      );
      await pool.query(
        `insert into user_profile(user_id, first_name, last_name, phone_number, roles, created_at, updated_at)
                values($1, $2, $3, $4, $5, $6, $7)
            `,
        [user.rows[0].user_id, firstName, lastName, req.body.phoneNumber, roles, new Date(), new Date()]
      );

      return res.status(201).json({
        msg: "user has been created",
        data: user.rows[0],
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        msg: "invalid input",
      });
    }
  },

  async login(req, res) {
    try {
      const users = await pool.query("select * from users where email = $1", [
        req.body.email.toLowerCase(),
      ]);
      const hasUser = Boolean(users.rows[0]);

      if (!hasUser) {
        return res.status(401).json({
          msg: "user not fround",
        });
      }

      const isValidPassword = await bcrypt.compare(
        req.body.password,
        users.rows[0].password
      );
      if (!isValidPassword) {
        return res.status(401).json({
          msg: "password is invalid",
        });
      }

      const user_id = users.rows[0].user_id;
      const user_profile = await pool.query(
        `select * from user_profile where user_id = $1`,
        [user_id]
      );

      const token = jwt.sign(
        {
          id: user_id,
          firstname: user_profile.rows[0].first_name,
          lastname: user_profile.rows[0].last_name,
          role: user_profile.rows[0].roles,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: 180000,
        }
      );

      return res.status(200).json({
        msg: "login successfully",
        token,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        msg: "something wrong",
      });
    }
  },

  async getUser(req, res) {
    const emailQuery = req.query.email;
    const userIdQuery = req.query.userId;
    const passwordQuery = req.query.password;
    let result;
    if (passwordQuery) {
      if (!emailQuery) {
        return res.status(200).json({
          msg: "email is blank",
        });
      } else {
        const users = await pool.query("select * from users where email = $1", [
          emailQuery.toLowerCase(),
        ]);
        const isValidPassword = await bcrypt.compare(
          passwordQuery,
          users.rows[0].password
        );
        if (!isValidPassword) {
          return res.status(200).json({
            msg: "password is invalid",
          });
        } else {
          return res.status(200).json({
            msg: "success",
          });
        }
      }
    } else if (userIdQuery) {
      result = await pool.query(
        `select users.user_id, first_name, last_name, phone_number, roles, created_at, updated_at from users
                inner join user_profile
                on user_profile.user_id = users.user_id
                where users.user_id = $1
            `,
        [userIdQuery]
      );
        //Set response format for Get User by Id
        result.rows[0].created_at = result.rows[0].created_at
        .toLocaleString()
        .split(", ")
        .join(" ");
        result.rows[0].updated_at = result.rows[0].updated_at
        .toLocaleString()
        .split(", ")
        .join(" ");
      return res.status(200).json({
        data: result.rows[0],
      });
    } else if (emailQuery) {
      result = await pool.query(
        `select users.user_id, first_name, last_name, phone_number, roles, created_at, updated_at from users
                    inner join user_profile
                    on user_profile.user_id = users.user_id
                    where users.email = $1
                `,
        [emailQuery.toLowerCase()]
      );
      return res.status(200).json({
        data: result.rows[0],
      });
    } else {
      result =
        await pool.query(`select users.user_id, first_name, last_name, phone_number, roles, created_at, updated_at
                from user_profile
                inner join users
                on users.user_id = user_profile.user_id`);

      //Set response format for Get All User
      result.rows[0].created_at = result.rows[0].created_at
      .toLocaleString()
      .split(", ")
      .join(" ");
      result.rows[0].updated_at = result.rows[0].updated_at
      .toLocaleString()
      .split(", ")
      .join(" ");

      res.json({
        data: result.rows,
      });
    }
  },
};

export default userController;
