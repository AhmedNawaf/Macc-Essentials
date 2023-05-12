import { Button } from '@chakra-ui/react';

interface Props {
  name: string;
  handleSearchParams: (value: string | null) => void;
  filterType: string | null;
}

function FilterButton({ name, handleSearchParams, filterType }: Props) {
  return name === 'Reset' ? (
    filterType ? (
      <Button
        key={name}
        py='6'
        px='12'
        size='lg'
        onClick={() => handleSearchParams(null)}
      >
        {name}
      </Button>
    ) : null
  ) : (
    <Button
      key={name}
      py='6'
      px='12'
      size='lg'
      colorScheme={`${filterType === name ? 'orange' : 'gray'}`}
      onClick={() => handleSearchParams(name)}
    >
      {name}
    </Button>
  );
}

export default FilterButton;
