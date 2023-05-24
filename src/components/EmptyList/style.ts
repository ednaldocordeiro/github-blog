import styled from "styled-components";

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  color: ${(props) => props.theme["base-label"]};
`