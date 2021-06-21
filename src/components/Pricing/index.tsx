import {
  Box,
  Heading,
  VStack,
  Image,
  Container,
  Flex,
  Text,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export function Pricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl" lineHeight="4rem">
          Vamos nessa?<br />Então escolha seu continente
        </Heading>
      </VStack>

      <Container maxW="container.xl" paddingY="20px">
        <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
          <SwiperSlide>
            <Flex alignItems="center" justifyContent="center">
              <Image src="./images/Continent_Image.svg" alt="europa" position="relative" />
              <Box position="absolute">
                <Heading as="h1" size="2xl" color="white">
                  Europa
                </Heading>
                <Heading as="h2" size="md" color="white" marginTop="2rem">
                  O continente mais antigo
                </Heading>
              </Box>
            </Flex>
          </SwiperSlide>

          <SwiperSlide>
            <Image src="./images/Continent_Image.svg" alt="europa" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src="./images/Continent_Image.svg" alt="europa" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}