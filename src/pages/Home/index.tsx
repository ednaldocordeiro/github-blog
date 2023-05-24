import { useContext } from "react";
import { AuthorCard } from "./AuthorCard";
import { Post } from "./Post";
import { HomeContainer } from "./style";
import { PostsContext } from "../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";

export function Home() {
  const posts = useContextSelector(PostsContext, (ctx) => {
    return ctx.posts
  })

  return (
    <HomeContainer>
      <AuthorCard />
      <section className="publications">
        <h2>Publicações</h2>
        <input className="search" type="text" placeholder="Buscar conteúdo" />
        <div className="posts">
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </section>
    </HomeContainer>
  )
}