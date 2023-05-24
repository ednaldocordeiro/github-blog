import { ChangeEvent } from "react";
import { AuthorCard } from "./AuthorCard";
import { Post } from "./Post";
import { HomeContainer } from "./style";
import { PostsContext } from "../../contexts/PostsContext";
import { useContextSelector } from "use-context-selector";

import { useForm } from "react-hook-form";
import { Search } from "./components/Search";
import { EmptyList } from "../../components/EmptyList";

export function Home() {
  const posts = useContextSelector(PostsContext, (ctx) => {
    return ctx.posts
  })

  return (
    <HomeContainer>
      <AuthorCard />
      <section className="publications">
        <h2>Publicações</h2>
        <Search />
        <div className="posts">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </section>
    </HomeContainer>
  )
}