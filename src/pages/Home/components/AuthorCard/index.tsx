import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../../../contexts/PostsContext';
import { ArthorCardContainer } from './style';

export function AuthorCard() {
  const user = useContextSelector(PostsContext, (ctx) => {
    return ctx.user;
  });

  return (
    <ArthorCardContainer>
      <img src={user.avatar_url} alt='author' />
      <div className='author'>
        <header>
          <h1>{user.name}</h1>
          <a href='https://github.com/ednaldocordeiro' target='_blank'>
            GITHUB
            <FaExternalLinkAlt />
          </a>
        </header>
        <p>{user.bio}</p>
        <div className='informations'>
          <span>
            <FaGithub /> {user.login}
          </span>
          <span>
            <FaBuilding /> {user.company}
          </span>
          <span>
            <FaUserFriends /> {user.followers}
          </span>
        </div>
      </div>
    </ArthorCardContainer>
  );
}
