import { useParams } from "react-router-dom"
import { PostCard } from "./components/PostCard";
import { PostBody } from "./styles";
import { useEffect, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { PostsContext } from "../../contexts/PostsContext";

import ReactMarkdown from "react-markdown";

export function Post() {
  const {postId} = useParams();

  const fetchPost = useContextSelector(PostsContext, (ctx) => {
    return ctx.fetchPost;
  })
  const post = useContextSelector(PostsContext, (ctx) => {
    return ctx.post;
  })

  useEffect(() => {
    fetchPost(Number(postId));
  }, [])

  return (
    <main>
      <PostCard />
      <PostBody>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </PostBody>
    </main>
  )
}