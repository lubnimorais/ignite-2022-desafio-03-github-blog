import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as Zod from 'zod';

import { SearchInputContainer } from './styles';
import { useCallback } from 'react';

const searchFormSchemaValidation = Zod.object({
  query: Zod.string(),
});

type SearchFormInput = Zod.infer<typeof searchFormSchemaValidation>;

interface ISearchInputProps {
  postsLength: number;
  loadPosts: (query?: string) => Promise<void>;
}

const SearchInput = ({ postsLength, loadPosts }: ISearchInputProps) => {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchemaValidation),
  });

  const handleSearchPost: SubmitHandler<SearchFormInput> = useCallback(
    async data => {
      const { query } = data;

      await loadPosts(query);
    },
    [loadPosts],
  );

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>

        <span>{postsLength} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  );
};

export { SearchInput };
