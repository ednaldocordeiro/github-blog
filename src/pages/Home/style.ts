import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 1rem;

  .publications {
    max-width: 1120px;
    margin: 4.5rem auto 0;
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
  }
`;
