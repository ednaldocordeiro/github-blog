import { FiInbox } from 'react-icons/fi';
import { EmptyListContainer } from './style';

export function EmptyList() {
  return (
    <EmptyListContainer>
      <FiInbox size={50} />
      <span>Por aqui tudo vazio</span>
    </EmptyListContainer>
  );
}
