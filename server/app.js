import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cloudinary from "cloudinary";
import userRoute from "./routers/user.route.js";
import serviceRoute from "./routers/service.route.js";
import orderRoute from "./routers/order.route.js";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const port = process.env.PORT || 4012;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/users", userRoute);
app.use("/service", serviceRoute);
app.use("/orders", orderRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
