import {
  Grid,
  GridItem,
  Accordion,
  HStack,
  SimpleGrid,
  Text,
  Select,
  Box,
  Heading,
} from '@chakra-ui/react';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import useTypedSearchParams from '@/hooks/useTypedSearchParams';
import CustomAccordion from '../CustomAccordion';
import FilterButton from '../FilterButton';
import { sortProducts, FnParams } from '@/utils';
import { useMemo } from 'react';

function ProductsSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { type: filterType, sort: filterSort } = useTypedSearchParams();
  const mockedData = useLoaderData() as ReturnType<typeof loader>;

  const sortedData = useMemo(
    () => (filterSort ? sortProducts(mockedData, filterSort) : mockedData),
    [searchParams]
  );

  const filteredData = useMemo(
    () =>
      filterType
        ? sortedData.filter(({ type }) => type === filterType)
        : sortedData,
    [searchParams]
  );

  // console.log(sortedData);

  function handleSearchParams(key: string, value: string | null) {
    setSearchParams((prevSearchParams) => {
      if (!value || (key === 'sort' && value === 'newest')) {
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
          {['Mocked', 'Not Mocked', 'Reset'].map((name) => (
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
            onChange={(e) => handleSearchParams('sort', e.target.value)}
          >
            <option value='newest'>Newest</option>
            <option value='A-Z'>From A-Z</option>
            <option value='Z-A'>From Z-A</option>
            <option value='highest'>From the highest value</option>
            <option value='lowest'>From the lowest value</option>
          </Select>
        </HStack>
        <SimpleGrid minChildWidth='200px' gap='8'>
          {filteredData.map(({ name, price }) => (
            <Box p='6' shadow='lg' key={name}>
              <Heading fontSize='xl'>{name}</Heading>
              <Text>{price}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </GridItem>
    </Grid>
  );
}

export default ProductsSection;

export function loader() {
  const mockedData: FnParams[] = [
    {
      name: 'B',
      price: 50,
      type: 'Mocked',
    },
    {
      name: 'C',
      price: 170,
      type: 'Not Mocked',
    },
    {
      name: 'A',
      price: 10,
      type: 'Mocked',
    },
    {
      name: 'D',
      price: 20,
      type: 'Not Mocked',
    },
    {
      name: 'E',
      price: 90,
      type: 'Mocked',
    },
    {
      name: 'F',
      price: 100,
      type: 'Not Mocked',
    },
  ];

  return mockedData;
}
