import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 1rem;

  .publications {
    max-width: 1120px;
    margin: 4.5rem auto 0;
  }

  .search {
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    font-size: 1rem;
    margin-top: 1.5rem;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  .posts {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;

    margin-top: 3rem;
    margin-bottom: 3rem;

    overflow: hidden;

    .post {
      width: calc(50% - 0.8rem);
      height: 260px;
      background-color: ${(props) => props.theme['base-post']};
      padding: 2rem;
      border-radius: 10px;

      h1 {
        font-size: 1.25rem;
        width: 75%;
        line-height: 160%;
        margin-bottom: 1rem;
      }

      p {
        line-height: 160%;
        text-overflow: ellipsis;
      }
    }
  }
`;
