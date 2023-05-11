import { Box, Image, Center, Heading } from '@chakra-ui/react';
import assets from '@/assets';

function Hero() {
  return (
    <Box
      w={{ base: 'auto', lg: 'full' }}
      h={{ base: '80vh', md: 'auto' }}
      overflow='hidden'
      pos='relative'
    >
      <Image
        w='full'
        h='full'
        objectFit='cover'
        src={assets.photos.collectionHero}
      />
      <Center
        pos='absolute'
        bg='blackAlpha.700'
        w='full'
        h='full'
        color='white'
        inset='0'
      >
        <Heading
          textTransform='uppercase'
          fontWeight='bold'
          fontSize={{ base: '4xl', lg: '6xl' }}
          textAlign='center'
        >
          {' '}
          Welcome to our collection
        </Heading>
      </Center>
    </Box>
  );
}

export default Hero;
