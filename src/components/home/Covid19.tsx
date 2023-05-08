import { Box, Heading, Text } from '@chakra-ui/react';

function Covid19() {
  return (
    <Box my={20} p={4} textAlign='center' mx='auto' maxW='2xl'>
      <Heading
        textTransform='uppercase'
        fontWeight='bold'
        fontSize='3xl'
        color='red.500'
      >
        Covid-19{' '}
        <Heading as='span' fontSize='3xl' color='primaryHeading'>
          Guidelines
        </Heading>
      </Heading>
      <Text fontSize='lg' mt={4}>
        Please remember to adhere all covid-19 guidelines. Precaution is key to
        survive this pandemic. Stay at home and Stay safe.
      </Text>
    </Box>
  );
}

export default Covid19;
