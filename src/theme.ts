import { extendTheme, defineStyleConfig } from '@chakra-ui/react';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/500.css';
import '@fontsource/montserrat';

const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: 'primaryFont',
  },
});

const Text = defineStyleConfig({
  baseStyle: {
    fontFamily: 'secondaryFont',
  },
});

const theme = extendTheme({
  fonts: {
    primaryFont: `"Poppins", sans-serif`,
    secondaryFont: `"Montserrat", sans-serif`,
  },
  colors: {
    primaryBg: '#F8F8F8',
    primaryText: '#707070',
    primaryHeading: '#1E1E20',
  },
  components: {
    Heading,
    Text,
  },
});

export default theme;
