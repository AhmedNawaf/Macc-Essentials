import { Box, Heading } from '@chakra-ui/react';
import ProductsGrid from '../ProductsGrid';

function NewProducts() {
  return (
    <Box
      textAlign='center'
      mt={32}
      mx={{ base: 8, xl: 'auto' }}
      p={8}
      maxW='7xl'
    >
      <Heading fontWeight='bold' fontSize='4xl' color='red.500'>
        NEW{' '}
        <Heading as='span' fontSize='4xl' color='blue.600'>
          PRODUCTS
        </Heading>
      </Heading>
      <ProductsGrid mt={12} spacing={12} />
    </Box>
  );
}

export default NewProducts;
