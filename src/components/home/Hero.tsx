import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';

function Hero() {
  return (
    <Box backgroundColor='primaryBg' py={{ md: 12 }}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        maxW='8xl'
        mx={{ sm: 8, md: 'auto' }}
        spacing={{ base: 20, lg: 40 }}
        p={6}
      >
        <Flex
          direction='column'
          justify='center'
          align={{ sm: 'center', md: 'start' }}
          flex='1'
          p={{ base: 0, md: 8 }}
          order={{ base: '1', md: '0' }}
          my={{ base: 12, md: 0 }}
        >
          <Heading
            color='#3A408C'
            fontSize={{ base: '2xl', sm: '4xl', xl: '5xl' }}
            mb={4}
          >
            PROVIDING SERVICES AT YOUR DOOR
          </Heading>
          <Text mb={12} color='primaryText'>
            <Text as='span' fontWeight='bold' fontSize='lg'>
              MACC Essentials
            </Text>{' '}
            has an important role in making supplies and services available to
            customers and their patients during this critical time. This
            includes services from various domains. Our aim is to aid you. As
            much we can.
          </Text>
          <Button
            colorScheme='red'
            px={12}
            py={6}
            fontSize={{ base: 'md', md: 'lg' }}
            textTransform='uppercase'
            fontWeight='bold'
            fontFamily='primaryFont'
          >
            Learn more
          </Button>
        </Flex>
        <Box flex='1'>
          <Image src='/cover_img.png' w='full' />
        </Box>
      </Stack>
    </Box>
  );
}

export default Hero;
