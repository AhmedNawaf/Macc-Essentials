import { Button, ButtonProps } from '@chakra-ui/react';

interface Props {
  name: string;
  handleSearchParams: (value: string | null) => void;
  filterType: string | null;
}

function FilterButton({ name, handleSearchParams, filterType }: Props) {
  const sharedStyles: ButtonProps = {
    py: '6',
    px: '12',
    size: 'lg',
  };
  return name === 'Reset' ? (
    filterType ? (
      <Button {...sharedStyles} onClick={() => handleSearchParams(null)}>
        {name}
      </Button>
    ) : null
  ) : (
    <Button
      {...sharedStyles}
      colorScheme={`${filterType === name ? 'orange' : 'gray'}`}
      onClick={() => handleSearchParams(name)}
    >
      {name}
    </Button>
  );
}

export default FilterButton;
