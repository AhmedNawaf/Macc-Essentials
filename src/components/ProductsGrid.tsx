import {
  SimpleGrid,
  Text,
  Box,
  Heading,
  Image,
  SimpleGridProps,
} from '@chakra-ui/react';
import assets from '@/assets';

interface Props {
  limit?: 1 | 2;
}

function ProductsGrid({ limit, ...rest }: Props & SimpleGridProps) {
  const { products } = assets;
  const shownProducts = limit ? products.slice(0, limit) : products;
  return (
    <SimpleGrid {...rest} minChildWidth='200px' placeItems='center'>
      {shownProducts.map(({ name, imgUrl }, i) => {
        return (
          <Box key={i} pos='relative'>
            {i === 0 && (
              <Text
                as='span'
                textTransform='uppercase'
                py={1}
                px={4}
                bg='red.500'
                color='white'
                pos='absolute'
                right={0}
              >
                Top Seller
              </Text>
            )}
            <Image src={imgUrl} alt={imgUrl.split('.')[0]} />
            <Heading
              textAlign='center'
              mt={6}
              fontSize='xl'
              fontWeight='500'
              as='h3'
            >
              {name}
            </Heading>
          </Box>
        );
      })}
    </SimpleGrid>
  );
}

export default ProductsGrid;
