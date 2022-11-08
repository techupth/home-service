import {
  Container,
  Text,
  Image,
  Flex,
  FormLabel,
  Button,
  Divider,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import SideBar from "../AdminPage/SideBar";
import arrow from "../../asset/image/serviceCategory/left-arrow.svg";
import binIcon from "../../asset/image/serviceCategory/bin-icon.svg";
import warningICon from "../../asset/image/serviceCategory/warning-icon.svg";
import { Link } from "react-router-dom";

const DetailServiceCategory = () => {
  return (
    <Container bg="#F3F4F6" maxW="100%" height="100vh" paddingLeft="0px">
      <Flex>
        <SideBar />
        <Flex
          className="create-service-field"
          direction="column"
          alignItems={"center"}
          width="100vw"
          height="100vh"
        >
          <Flex
            className="create-service-category-bar"
            bg="white"
            borderBottom={"1px"}
            borderColor="gray.300"
            width="100%"
            height={"80px"}
            justify={"space-between"}
            alignItems="center"
          >
            <Flex
              className="left-side"
              direction="row"
              alignItems={"center"}
              marginLeft="3rem"
            >
              <Link to="/admin-dashboard">
                <Image src={arrow} marginRight="1.5rem" />
              </Link>

              <Flex direction={"column"}>
                <Text textStyle="b4">หมวดหมู่</Text>
                <Text
                  className="category-name"
                  textStyle="h2"
                  color="utility.black"
                >
                  บริการห้องครัว
                </Text>
              </Flex>
            </Flex>
            <Flex
              className="button-group"
              justifyContent="space-between"
              width="12rem"
              marginRight="5rem"
            >
              <Link to="/admin-dashboard/category/edit">
                <Button width={"5.5rem"} onSubmit={{}}>
                  แก้ไข
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            className="edit-service-input"
            direction={"column"}
            paddingLeft={"2rem"}
            justify="center"
            alignItems={"left"}
            bg="white"
            border="1px"
            borderColor="gray.200"
            borderRadius={"8px"}
            width={"1120px"}
            height="304px"
            marginTop="4rem"
          >
            <Flex direction={"row"}>
              <Text textStyle="h5" marginRight="10rem">
                ชื่อหมวดหมู่
              </Text>
              <Text
                className="category-name"
                textStyle="b1"
                color={"utility.black"}
              >
                {" "}
                ชื่อ
              </Text>
            </Flex>
            <Divider padding={"1rem"} />
            <Box className="info" marginTop="3rem">
              <Flex className="created-info" marginBottom={"2rem"}>
                <Text textStyle="h5" marginRight="5rem" width={"5rem"}>
                  สร้างเมื่อ
                </Text>
                <Text className="created-at">12/02/2022 10:30PM</Text>
              </Flex>
              <Flex className="edited-info">
                <Text textStyle="h5" marginRight="5rem" width={"5rem"}>
                  แก้ไขล่าสุด
                </Text>
                <Text className="edited-at">12/02/2022 10:30PM</Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default DetailServiceCategory;
