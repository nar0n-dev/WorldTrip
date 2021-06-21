import {
  Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BannerTemplateProps {
    bgImage: string;
    bgSize: string;
    height: string;
    children: ReactNode
}

export function BannerTemplate({
    bgImage,
    bgSize,
    height,
    children
}:BannerTemplateProps) {
  return (
      <Flex
        direction="row"
        justifyContent="space-evenly"
        w='100%'
        backgroundImage={bgImage}
        backgroundSize={bgSize}
        height={height}
        backgroundRepeat="no-repeat"
      >
        {children}
      </Flex>
  );
}