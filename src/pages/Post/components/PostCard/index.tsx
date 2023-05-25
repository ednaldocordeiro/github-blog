import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaChevronLeft,
  FaCalendar,
  FaComment,
} from 'react-icons/fa';
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../../../contexts/PostsContext';
import { PostCardContainer } from './style';
import { useNavigate } from 'react-router-dom';

export function PostCard() {
  const navigation = useNavigate();

  const post = useContextSelector(PostsContext, (ctx) => {
    return ctx.post;
  })

  return (
    <PostCardContainer>
      <div className='postInfo'>
        <header>
          <button className='link' onClick={() => navigation(-1)}>
            <FaChevronLeft />
            VOLTAR
          </button>
          <a href={post.html_url} target='_blank'>
            VER NO GITHUB
            <FaExternalLinkAlt />
          </a>
        </header>
        <h1>{post.title}</h1>
        <div className='informations'>
          <span>
            <FaGithub /> {post.user?.login}
          </span>
          <span>
            <FaCalendar /> {post.created_at}
          </span>
          <span>
            <FaComment /> {post.comments}
          </span>
        </div>
      </div>
    </PostCardContainer>
  );
}
