import Head from 'next/head';
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react';
import { BannerTemplate } from '../BannerTemplate'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
      <BannerTemplate
        bgImage="url('./images/Background.svg')"
        bgSize="cover"
        height="332px"
      > 
        <Stack 
          direction='column'
          justify="center"
          p="8"
          spacing="5"
        >
          <Heading as="h1" color={'white'}>
            5 Continentes,<br />infinitas possibilidades.
          </Heading>

          <Text color={'gray.500'} fontSize="lg">
            Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.
          </Text>
        </Stack>

        {isWideVersion && (
          <Box >
            <Image 
              src="./images/Airplane.svg" 
              alt="Logo WorldTrip"
              marginTop='80px'
            />
          </Box>
        )}
      </BannerTemplate>
  );
}