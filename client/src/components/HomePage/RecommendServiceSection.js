import { Badge, Box, Button, Center, Container, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
const RecommendServiceSection = () => {
    return (
        <Container className='recommendService' maxW='100%' bg='gray.100' centerContent>
            <Flex>
                <Center w='1440px' mb='42px' mt='80px'>
                    <Text textStyle='h1' color='blue.950'>บริการยอดฮิตของเรา</Text>
                </Center>
            </Flex >
            <Flex>
                <Center w='1440px'>
                    <Grid templateColumns='repeat(3, 1fr)' gap='37px'>
                        <Box w='349px' h='369px' bg='utility.white' overflow='hidden' border='1px' borderColor='gray.300' borderRadius='8px'>
                            <Image src={require('../../asset/image/serviceImage/ทำความสะอาดทั่วไป.png')} alt='ทำความสะอาดทั่วไป' h='200px' w='100%' />
                            <Badge borderRadius='10%' px='10px' py='4px' bg='blue.100' mx='24px' mt='16px' mb='8px'>
                                <Text textStyle='b4' color='blue.800'>บริการทั่วไป</Text>
                            </Badge>
                            <Text textStyle='h2' color='gray.950' mx='24px' mb='4px'>ทำความสะอาดทั่วไป</Text>
                            <Flex mx='24px' mb='22px'>
                                <svg width="14" height="15" viewBox="0 -1 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2735 7.10659L7.38683 1.21992C7.14016 0.973252 6.80016 0.833252 6.44683 0.833252H1.66683C0.933496 0.833252 0.333496 1.43325 0.333496 2.16659V6.94659C0.333496 7.29992 0.473496 7.63992 0.726829 7.88659L6.6135 13.7733C7.1335 14.2933 7.98016 14.2933 8.50016 13.7733L13.2802 8.99325C13.8002 8.47325 13.8002 7.63325 13.2735 7.10659ZM7.5535 12.8333L1.66683 6.94659V2.16659H6.44683L12.3335 8.05325L7.5535 12.8333Z" fill="#646C80" />
                                    <path d="M3.3335 4.83325C3.88578 4.83325 4.3335 4.38554 4.3335 3.83325C4.3335 3.28097 3.88578 2.83325 3.3335 2.83325C2.78121 2.83325 2.3335 3.28097 2.3335 3.83325C2.3335 4.38554 2.78121 4.83325 3.3335 4.83325Z" fill="#646C80" />
                                </svg>
                                <Text textStyle='b3' color='gray.700' ml='8px'>ค่าบริการประมาณ 500.00 - 1,000.00 ฿</Text>
                            </Flex>
                            <Text textStyle='button' color='blue.600' textDecoration='underline' mx='24px'>เลือกบริการ</Text>
                        </Box>
                        <Box w='349px' h='369px' bg='utility.white' overflow='hidden' border='1px' borderColor='gray.300' borderRadius='8px'>
                            <Image src={require('../../asset/image/serviceImage/ล้างแอร์.png')} alt={null} h='200px' w='100%' />
                            <Badge borderRadius='10%' px='10px' py='4px' bg='blue.100' mx='24px' mt='16px' mb='8px'>
                                <Text textStyle='b4' color='blue.800'>บริการทั่วไป</Text>
                            </Badge>
                            <Text textStyle='h2' color='gray.950' mx='24px' mb='4px'>ล้างแอร์</Text>
                            <Flex mx='24px' mb='22px'>
                                <svg width="14" height="15" viewBox="0 -1 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2735 7.10659L7.38683 1.21992C7.14016 0.973252 6.80016 0.833252 6.44683 0.833252H1.66683C0.933496 0.833252 0.333496 1.43325 0.333496 2.16659V6.94659C0.333496 7.29992 0.473496 7.63992 0.726829 7.88659L6.6135 13.7733C7.1335 14.2933 7.98016 14.2933 8.50016 13.7733L13.2802 8.99325C13.8002 8.47325 13.8002 7.63325 13.2735 7.10659ZM7.5535 12.8333L1.66683 6.94659V2.16659H6.44683L12.3335 8.05325L7.5535 12.8333Z" fill="#646C80" />
                                    <path d="M3.3335 4.83325C3.88578 4.83325 4.3335 4.38554 4.3335 3.83325C4.3335 3.28097 3.88578 2.83325 3.3335 2.83325C2.78121 2.83325 2.3335 3.28097 2.3335 3.83325C2.3335 4.38554 2.78121 4.83325 3.3335 4.83325Z" fill="#646C80" />
                                </svg>
                                <Text textStyle='b3' color='gray.700' ml='8px'>ค่าบริการประมาณ 500.00 - 1,000.00 ฿</Text>
                            </Flex>
                            <Text textStyle='button' color='blue.600' textDecoration='underline' mx='24px'>เลือกบริการ</Text>
                        </Box>
                        <Box w='349px' h='369px' bg='utility.white' overflow='hidden' border='1px' borderColor='gray.300' borderRadius='8px'>
                            <Image src={require('../../asset/image/serviceImage/ซ่อมเครื่องซักผ้า.png')} alt={null} h='200px' w='100%' />
                            <Badge borderRadius='10%' px='10px' py='4px' bg='blue.100' mx='24px' mt='16px' mb='8px'>
                                <Text textStyle='b4' color='blue.800'>บริการทั่วไป</Text>
                            </Badge>
                            <Text textStyle='h2' color='gray.950' mx='24px' mb='4px'>ซ่อมเครื่องซักผ้า</Text>
                            <Flex mx='24px' mb='22px'>
                                <svg width="14" height="15" viewBox="0 -1 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2735 7.10659L7.38683 1.21992C7.14016 0.973252 6.80016 0.833252 6.44683 0.833252H1.66683C0.933496 0.833252 0.333496 1.43325 0.333496 2.16659V6.94659C0.333496 7.29992 0.473496 7.63992 0.726829 7.88659L6.6135 13.7733C7.1335 14.2933 7.98016 14.2933 8.50016 13.7733L13.2802 8.99325C13.8002 8.47325 13.8002 7.63325 13.2735 7.10659ZM7.5535 12.8333L1.66683 6.94659V2.16659H6.44683L12.3335 8.05325L7.5535 12.8333Z" fill="#646C80" />
                                    <path d="M3.3335 4.83325C3.88578 4.83325 4.3335 4.38554 4.3335 3.83325C4.3335 3.28097 3.88578 2.83325 3.3335 2.83325C2.78121 2.83325 2.3335 3.28097 2.3335 3.83325C2.3335 4.38554 2.78121 4.83325 3.3335 4.83325Z" fill="#646C80" />
                                </svg>
                                <Text textStyle='b3' color='gray.700' ml='8px'>ค่าบริการประมาณ 500.00 ฿</Text>
                            </Flex>
                            <Text textStyle='button' color='blue.600' textDecoration='underline' mx='24px'>เลือกบริการ</Text>
                        </Box>
                    </Grid>
                </Center>
            </Flex>
            <Flex>
                <Center w='1440px'>
                    <Link to={'/service-list'}>
                        <Button role='click' bg='blue.600' textStyle='h5' color='utility.white' px='24px' py='10px' mt='70px' mb='175px' _hover={{ bg: 'blue.500' }} _active={{ bg: 'blue.800' }}>ดูบริการทั้งหมด</Button>
                    </Link>
                </Center>
            </Flex>
        </Container >
    )
}

export default RecommendServiceSection