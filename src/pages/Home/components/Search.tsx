import { ChangeEvent } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SearchContainer } from './styles';

import { FaSearch } from 'react-icons/fa';
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../../contexts/PostsContext';

interface FormData {
  search: string;
}

export function Search() {
  const { register, handleSubmit } = useForm<FormData>();
  const fetchPosts = useContextSelector(PostsContext, (ctx) => ctx.fetchPosts)

  const handleSearchPosts: SubmitHandler<FormData> = (data) => {
    fetchPosts(data.search);
  };


  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <input
        type='text'
        placeholder='Buscar conteúdo'
        {...register('search')}
      />
      <button type='submit'>
        <FaSearch />
      </button>
    </SearchContainer>
  );
}
