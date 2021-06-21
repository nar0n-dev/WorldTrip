import {
  Image,
  Flex,
} from '@chakra-ui/react';

export function Header() {

  return (
      <Flex
        minH={'100px'}
        align={'center'}>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>

          <Image src="./images/Logo.svg" alt="Logo WorldTrip"/>

        </Flex>
      </Flex>
  );
}
