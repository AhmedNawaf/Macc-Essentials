import { Button, ButtonProps } from '@chakra-ui/react';

interface Props {
  name: string;
  handleSearchParams: (key: string, value: string | null) => void;
  filterType: string | null;
}

function FilterButton({ name, handleSearchParams, filterType }: Props) {
  const sharedStyles: ButtonProps = {
    py: '8',
    px: '12',
    size: 'lg',
    fontSize: 'xl',
  };
  return name === 'Reset' ? (
    filterType ? (
      <Button
        {...sharedStyles}
        onClick={() => handleSearchParams('type', null)}
      >
        {name}
      </Button>
    ) : null
  ) : (
    <Button
      {...sharedStyles}
      colorScheme={`${filterType === name ? 'orange' : 'gray'}`}
      onClick={() => handleSearchParams('type', name)}
    >
      {name}
    </Button>
  );
}

export default FilterButton;
