import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  IconButton,
  Link,
  Heading,
  Hide,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BsSearch, BsCart } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Brand from './Brand';

interface Props {
  country: string;
  state: string;
}

function Navbar({ country, state }: Props) {
  return (
    <VStack>
      {country && state ? (
        <Box mx='auto' p={4} borderBottom='1px solid #D2D2D2' width='full'>
          <Text textAlign='center' fontSize={{ sm: 'md', lg: 'lg' }}>
            Your current location: {country}, {state}
          </Text>
        </Box>
      ) : null}

      <Box p={8} width='full'>
        <Flex
          maxW='8xl'
          gap={8}
          m='auto'
          justify='space-between'
          align='center'
        >
          <IconButton
            bg='0'
            size='lg'
            icon={<BsSearch />}
            aria-label='search-button'
          />
          <Hide breakpoint='(max-width: 855px)'>
            <Links />
          </Hide>
          <Show breakpoint='(max-width: 855px)'>
            <Brand />
          </Show>
          <Flex gap={4}>
            <IconButton
              bg='0'
              size='lg'
              icon={<BiUser />}
              aria-label='user-button'
            />
            <IconButton
              bg='0'
              size='lg'
              icon={<BsCart />}
              aria-label='cart-button'
            />
            <Show breakpoint='(max-width: 855px)'>
              <DropDown />
            </Show>
          </Flex>
        </Flex>
      </Box>
    </VStack>
  );
}

function Links() {
  return (
    <HStack
      spacing={10}
      textTransform='uppercase'
      fontFamily='secondaryFont'
      textAlign='start'
      fontSize={{ sm: 'sm', lg: 'md' }}
    >
      <Link as={RouterLink} to='/collection'>
        Shop
      </Link>
      <Link as={RouterLink} to='/'>
        Essentials
      </Link>
      <Brand />
      <Link as={RouterLink} to='/'>
        Best Sellers
      </Link>
      <Link as={RouterLink} to='/'>
        About Us
      </Link>
    </HStack>
  );
}

function DropDown() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='option'
        icon={<GiHamburgerMenu />}
        bg='0'
        size='lg'
      />
      <MenuList>
        <MenuItem as={RouterLink} to='/collection'>
          Shop
        </MenuItem>
        <MenuItem as={RouterLink} to='/'>
          Essentials
        </MenuItem>
        <MenuItem as={RouterLink} to='/'>
          Best Sellers
        </MenuItem>
        <MenuItem as={RouterLink} to='/'>
          About Us
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default Navbar;
