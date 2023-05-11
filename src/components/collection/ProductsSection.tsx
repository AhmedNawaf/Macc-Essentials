import {
  Box,
  Grid,
  GridItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Text,
} from '@chakra-ui/react';
import CustomAccordion from '../CustomAccordion';

function ProductsSection() {
  return (
    <Grid
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      m='8'
    >
      <GridItem colSpan={1}>
        <Accordion allowToggle>
          <CustomAccordion title='Company'>This is test</CustomAccordion>
          <CustomAccordion title='Price'>This is test</CustomAccordion>
          <CustomAccordion title='Categories'>This is test</CustomAccordion>
        </Accordion>
      </GridItem>
      <GridItem colSpan={4} bg='tomato' mt='6' />
    </Grid>
  );
}

export default ProductsSection;
