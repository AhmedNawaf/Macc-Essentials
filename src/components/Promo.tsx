import { Box, Flex, Hide, Heading, Image, Button } from '@chakra-ui/react';
import ProductsGrid from './ProductsGrid';

interface Props {
  firstElement: 'products' | 'image';
  imgSrc: 'weekly_bg.png' | 'top_selling_bg.png';
  headingText: string;
}

function Promo({ firstElement, imgSrc, headingText }: Props) {
  const isImageFirst = firstElement === 'image';
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      mt={24}
      maxW='7xl'
      mx={{ base: 8, lg: 'auto' }}
      gap={20}
      p={8}
    >
      <Hide below='lg'>
        <Box flex='1' order={isImageFirst ? 0 : 1}>
          <Image mx='auto' w='full' src={imgSrc} alt={imgSrc.split('.')[0]} />
        </Box>
      </Hide>

      <Box w='full' flex='1' pt={12} mr={isImageFirst ? 20 : 0}>
        <Flex
          justify={{ base: 'stretch', lg: 'space-between' }}
          align={{ base: 'start', lg: 'stretch' }}
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: 6, lg: 0 }}
        >
          <Heading
            textTransform='uppercase'
            fontWeight='bold'
            fontSize='3xl'
            color='red.500'
          >
            Macc{' '}
            <Heading as='span' fontSize='3xl' color='primaryHeading'>
              {headingText}
            </Heading>
          </Heading>
          <Button colorScheme='gray' textTransform='uppercase' p={5}>
            View All
          </Button>
        </Flex>
        <ProductsGrid limit={2} spacing={12} mt={16} />
      </Box>
    </Flex>
  );
}

export default Promo;
