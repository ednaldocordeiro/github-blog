import styled from "styled-components";

export const PostContainer = styled.div`
  width: calc(50% - 0.8rem);
  height: 260px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius: 10px;

  cursor: pointer;
  transition: 200ms;

  &:hover {
    filter: brightness(1.3);
  }

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
`