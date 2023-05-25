import styled from "styled-components";

export const PostBody = styled.section`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem;

  p {
    margin-bottom: .5rem;
  }

  pre {
    margin-top: 1rem;
    background-color: ${(props) => props.theme["base-post"]};
    padding: 1rem;
  }
`