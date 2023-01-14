import styled from "styled-components";

import background from '../../assets/background.svg';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 4rem 1rem 8rem;

  background: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
