import { AuthorCard } from "./AuthorCard";
import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <AuthorCard />
      <section className="publications">
        <h2>Publicações</h2>
      </section>
    </HomeContainer>
  )
}