import {
  Container,
  Text,
  Image,
  Flex,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import arrow from "../../asset/image/serviceCategory/left-arrow.svg";
import ล้างแอร์ from "../../asset/image/serviceImage/ล้างแอร์.png";
import { Link } from "react-router-dom";
import useAdminServiceLists from "../../hooks/useAdminServiceLists";
import { useEffect, useState } from "react";

const DetailServiceList = () => {
  const [serviceName, setServiceName] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [subServiceArr, setSubServiceArr] = useState([]);
  const [serviceCreateAt, setServiceCreateAt] = useState("");
  const [serviceUpdateAt, setServiceUpdateAt] = useState("");
  const { serviceList, getServiceListById, params } = useAdminServiceLists();

  useEffect(() => {
    getServiceListById(params);
  }, []);

  useEffect(() => {
    if (serviceList.service) {
      setServiceName(serviceList.service.service_name);
      setServiceCategory(serviceList.service.service_category_name);
      setServiceImage(serviceList.service.url);
      setSubServiceArr(serviceList.subService);
      setServiceCreateAt(serviceList.service.created_at);
      setServiceUpdateAt(serviceList.service.updated_at);
    }
  }, [serviceList]);
  console.log(serviceList);

  return (
    <Container bg="#F3F4F6" maxW="100%" height={"100%"} padding="0">
      <Flex>
        <Flex
          className="create-service-field"
          direction="column"
          alignItems={"center"}
          width="100%"
          height="100%"
        >
          <Flex
            className="create-service-bar"
            bg="white"
            borderBottom={"1px"}
            borderColor="gray.300"
            width="100%"
            height={"80px"}
            justify={"space-between"}
            padding="2rem"
            alignItems="center"
          >
            <Flex
              className="left-side"
              direction="row"
              alignItems={"center"}
              // marginLeft="3rem"
            >
              <Link to="/admin-dashboard/service">
                <Image src={arrow} marginRight="1.5rem" />
              </Link>

              <Flex direction={"column"}>
                <Text textStyle="b4">บริการ</Text>
                <Text
                  className="category-name"
                  textStyle="h2"
                  color="utility.black"
                >
                  {serviceName}
                </Text>
              </Flex>
            </Flex>
            <Flex
              className="button-group"
              justifyContent="space-between"
              // width="12rem"
              // marginRight="5rem"
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
            paddingRight={"2rem"}
            paddingTop="26px"
            paddingBottom="26px"
            alignItems={"left"}
            border="1px"
            bg="white"
            borderColor="gray.200"
            borderRadius={"8px"}
            height="fit=content"
            marginTop="-40px"
            sx={{ transform: "scale(0.8)" }}
            w="1420px"
          >
            <Flex
              direction={"row"}
              fontStyle={"h5"}
              marginBottom="32px"
              w={1120}
            >
              <Text color={"gray.700"} w="205px">
                ชื่อบริการ
              </Text>
              <Text
                className="category-name"
                textStyle="b1"
                color={"utility.black"}
              >
                {serviceName}
              </Text>
            </Flex>

            <Flex direction={"row"} fontStyle={"h5"} marginBottom="50px">
              <Text color={"gray.700"} w="205px">
                หมวดหมู่
              </Text>
              <Text
                className="category-name"
                textStyle="b1"
                color={"utility.black"}
              >
                {serviceCategory}
              </Text>
            </Flex>

            <Flex direction={"row"} fontStyle={"h5"} marginBottom="40px">
              <Text color={"gray.700"} w="205px">
                รูปภาพ
              </Text>
              <Image src={serviceImage} />
            </Flex>

            <Divider w="1356px" />

            <Box marginTop="40px">
              <Flex direction={"column"}>
                <Text color={"gray.700"} textStyle={"h5"} marginBottom="40px">
                  รายการบริการย่อย
                </Text>
                {subServiceArr.map((item, index) => {
                  return (
                    <Flex
                      direction={"row"}
                      gap="10px"
                      alignItems={"end"}
                      color="#646C80"
                      marginBottom="32px"
                    >
                      <Flex direction={"column"}>
                        <Text marginBottom="4px" w="488px">
                          ชื่อรายการ
                        </Text>
                        <Text textStyle="b1" color={"utility.black"}>
                          {item.sub_service_name}
                        </Text>
                      </Flex>
                      <Flex direction={"column"}>
                        <Text marginBottom="4px" w="252px">
                          หน่วยการบริการ
                        </Text>
                        <Text textStyle="b1" color={"utility.black"}>
                          {item.unit_name}
                        </Text>
                      </Flex>
                      <Flex direction={"column"}>
                        <Text marginBottom="4px" w="240px">
                          ค่าบริการ / 1 หน่วย
                        </Text>
                        <Text textStyle="b1" color={"utility.black"}>
                          {item.price_per_unit}
                        </Text>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Box>

            <Divider w="1356px" />

            <Box className="info" marginTop="3rem">
              <Flex className="created-info" marginBottom={"2rem"}>
                <Text
                  textStyle="h5"
                  marginRight="5rem"
                  width={"5rem"}
                  color={"gray.700"}
                >
                  สร้างเมื่อ
                </Text>
                <Text
                  className="created-at"
                  textStyle="b1"
                  color={"utility.black"}
                >
                  {serviceCreateAt}
                </Text>
              </Flex>
              <Flex className="edited-info">
                <Text
                  textStyle="h5"
                  marginRight="5rem"
                  width={"5rem"}
                  color={"gray.700"}
                >
                  แก้ไขล่าสุด
                </Text>
                <Text
                  className="edited-at"
                  textStyle="b1"
                  color={"utility.black"}
                >
                  {serviceUpdateAt}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
    
  );
};

export default DetailServiceList;