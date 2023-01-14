import { useParams } from "react-router-dom"

export function Post() {
  const {postId} = useParams();

  return (
    <main>
      <h1>{postId}</h1>
    </main>
  )
}