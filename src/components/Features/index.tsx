import {
  Container,
  Flex,
  SimpleGrid,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { ItensFeatures } from './ItensFeatures';

export const Feature = () => {
  return (
    <>
    <Flex>
      <Container maxW="container.xl" my={20}> 
        <SimpleGrid columns={[2, 5]}>
            <ItensFeatures image="./images/Cocktail.svg" alt="Cocktail" text="vida noturna"/>
            <ItensFeatures image="./images/Surf.svg" alt="Surf" text="praia"/>
            <ItensFeatures image="./images/Building.svg" alt="Building" text="moderno"/>
            <ItensFeatures image="./images/Museum.svg" alt="Museum" text="clássico"/>
            <ItensFeatures image="./images/Earth.svg" alt="Earth" text="e mais..."/>
        </SimpleGrid>
      </Container>
    </Flex>
    
    <Flex w="90px" h="2px" bg="gray.600" mx="auto"/>
    </>
  );
};