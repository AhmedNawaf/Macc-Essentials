import {
  Box,
  Stack,
  List,
  ListItem,
  Link,
  VStack,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Circle,
  StackDivider,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Brand from './Brand';
import { RxEnvelopeClosed } from 'react-icons/rx';

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const logosComponents = [FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram];

function Footer() {
  return (
    <Box borderTop='1px solid gray'>
      <Stack
        spacing={{ base: 4, lg: 12 }}
        divider={<StackDivider borderColor='gray.200' />}
        p={4}
        mt={12}
        maxW='7xl'
        mx='auto'
        direction={{ base: 'column', lg: 'row' }}
        textAlign={{ base: 'center', lg: 'start' }}
        fontSize={{ base: 'xl', lg: 'lg' }}
      >
        <Brand p={12} alignSelf={{ lg: 'center' }} />
        <List spacing={8} p={12}>
          {['Home', 'Collection', 'Products'].map((text) => (
            <ListItem key={text}>
              <Link as={RouterLink} to='/'>
                {text}
              </Link>
            </ListItem>
          ))}
        </List>

        <List spacing={8} p={12}>
          {['About', 'Contact', 'FAQ'].map((text) => (
            <ListItem key={text}>
              <Link as={RouterLink} to='/'>
                {text}
              </Link>
            </ListItem>
          ))}
        </List>
        <VStack alignSelf='center' spacing={6} pt={6} px={{ base: 24, lg: 0 }}>
          <Text>
            Be the first to know about our biggest and best sales. We'll never
            send more than one email a month.
          </Text>
          <InputGroup size='lg'>
            <Input
              variant='flushed'
              placeholder='Enter Your Email'
              _placeholder={{ fontWeight: 'semibold' }}
            />
            <InputRightElement
              pointerEvents='none'
              children={<RxEnvelopeClosed />}
            />
          </InputGroup>
          <HStack
            alignSelf='start'
            spacing={4}
            justify={{ base: 'center', lg: 'stretch' }}
            w='full'
          >
            {logosComponents.map((Icon, i) => (
              <Circle key={i} size='40px' color='white' bg='blue.600'>
                <Icon />
              </Circle>
            ))}
          </HStack>
        </VStack>
      </Stack>
      <Text textAlign='center' fontSize='xl' my={12}>
        All rights reserved to{' '}
        <a href='https://github.com/sa23sa' target='_blank'>
          sa23sa&copy;
        </a>
      </Text>
    </Box>
  );
}

export default Footer;
