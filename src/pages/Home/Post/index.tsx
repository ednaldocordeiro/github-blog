import ReactMarkdown from 'react-markdown'

interface PostProps {
  title: string;
  body: string;
  created_at: string;
}

export function Post({body, title}: PostProps) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <ReactMarkdown>{body.substring(0, 265).concat('...')}</ReactMarkdown>
    </div>
  );
}
