import {
    Image,
    Text,
    Stack,
} from '@chakra-ui/react';
  
interface ItensFeaturesProps {
    image: string;
    alt: string;
    text: string;
}

export function ItensFeatures({ image, alt, text }: ItensFeaturesProps) {
    return (
        <Stack direction="column" justifyContent="center" alignItems="center">
            <Image src={image} alt={alt} maxW="85px" maxH="85px" />

            <Text color={'gray.700'} fontSize="xl" textAlign="center" fontWeight="600">
            {text}
            </Text>
        </Stack>
    );
}