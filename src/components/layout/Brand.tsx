import { VStack, Heading, StackProps } from '@chakra-ui/react';

function Brand({ ...rest }: StackProps) {
  return (
    <VStack {...rest}>
      <Heading fontSize='2xl' color='blue.500'>
        Macc
      </Heading>
      <Heading fontSize='2xl' color='red.500'>
        Essentials
      </Heading>
    </VStack>
  );
}

export default Brand;
