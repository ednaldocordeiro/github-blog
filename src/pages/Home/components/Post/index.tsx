import ReactMarkdown from 'react-markdown'
import { PostContainer } from './styles';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export function Post({body, title, number}: PostProps) {
  const navigate = useNavigate()

  return (
    <PostContainer onClick={() => navigate(`/post/${number}`)}>
      <h1>{title}</h1>
      <ReactMarkdown>{body.substring(0, 265).concat('...')}</ReactMarkdown>
    </PostContainer>
  );
}
