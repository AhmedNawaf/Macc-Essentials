import { Grid, GridItem, Accordion, HStack, Button } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import CustomAccordion from '../CustomAccordion';

function ProductsSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterType = searchParams.get('type');

  function handleSearchParams(value: string | null) {
    setSearchParams((prevSearchParams) => {
      if (!value) {
        prevSearchParams.delete('type');
      } else {
        prevSearchParams.set('type', value);
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
      <GridItem colSpan={4} mt='6'>
        <HStack ms='12' spacing='12'>
          {['Filter 1', 'Filter 2', 'Filter 3', 'Reset'].map((name) => {
            if (name === 'Reset') {
              if (filterType)
                return (
                  <Button
                    key={name}
                    py='6'
                    px='12'
                    size='lg'
                    onClick={() =>
                      handleSearchParams(name === 'Reset' ? null : name)
                    }
                  >
                    {name}
                  </Button>
                );
              else return null;
            }
            return (
              <Button
                key={name}
                py='6'
                px='12'
                size='lg'
                colorScheme={`${filterType === name ? 'orange' : 'gray'}`}
                onClick={() =>
                  handleSearchParams(name === 'Reset' ? null : name)
                }
              >
                {name}
              </Button>
            );
          })}
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default ProductsSection;
