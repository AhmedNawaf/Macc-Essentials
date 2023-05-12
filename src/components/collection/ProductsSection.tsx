import {
  Grid,
  GridItem,
  Accordion,
  HStack,
  Button,
  Text,
  Select,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import CustomAccordion from '../CustomAccordion';
import FilterButton from '../FilterButton';

function ProductsSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');

  function handleSearchParams(key: string, value: string | null) {
    setSearchParams((prevSearchParams) => {
      if (!value) {
        prevSearchParams.delete(key);
      } else {
        prevSearchParams.set(key, value);
      }

      return prevSearchParams;
    });
  }

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
      <GridItem colSpan={4} mt='6' ms='12'>
        <HStack spacing='12'>
          {['Filter 1', 'Filter 2', 'Filter 3', 'Reset'].map((name) => (
            <FilterButton
              key={name}
              name={name}
              handleSearchParams={handleSearchParams}
              filterType={filterType}
            />
          ))}
        </HStack>
        <HStack my='16' justify='space-between'>
          <Text textTransform='uppercase'>40 Products</Text>
          <Select
            w='25%'
            size='lg'
            placeholder='Sort'
            onChange={(e) => handleSearchParams('sort', e.target.value)}
          >
            <option value='A-Z'>From A-Z</option>
            <option value='Z-A'>From Z-A</option>
            <option value='highest'>From the highest value</option>
            <option value='lowest'>From the lowest value</option>
          </Select>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default ProductsSection;
