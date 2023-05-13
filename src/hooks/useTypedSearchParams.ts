import { useSearchParams } from 'react-router-dom';

type TypeOptions = 'Mocked' | 'Not Mocked';
type SortOptions = 'A-Z' | 'Z-A' | 'highest' | 'lowest';

type TypedSearchParams = {
  type: TypeOptions | null;
  sort: SortOptions | null;
};

export default function useTypedSearchParams(): TypedSearchParams {
  const [searchParams] = useSearchParams();

  const typedSearchParams: TypedSearchParams = {
    type: (searchParams.get('type') as TypeOptions) || null,
    sort: (searchParams.get('sort') as SortOptions) || null,
  };

  return typedSearchParams;
}
