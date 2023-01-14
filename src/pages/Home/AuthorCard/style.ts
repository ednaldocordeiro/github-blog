import styled from "styled-components";

export const ArthorCardContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: -7rem;

  display: flex;
  gap: 2rem;

  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  .author {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    height: 9.25rem;
    border-radius: 10px;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  .informations {
    display: flex;
    gap: 1.5rem;

    span {
      color: ${props => props.theme["base-subtitle"]};
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${props => props.theme["base-label"]};
      }
    }
  }
`
