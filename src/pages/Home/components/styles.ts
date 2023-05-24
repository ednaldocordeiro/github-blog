import styled from "styled-components";

export const SearchContainer = styled.form`
  width: 100%;
  height: 3.2rem;
  padding: .5rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};
  font-size: 1rem;
  margin-top: 1.5rem;
  outline: none;

  display: flex;
  gap: 1rem;

  input {
    width: 95%;
    background-color: transparent;
    outline: none;
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    outline: none;
    border: 0;

    cursor: pointer;

    border-radius: 6px;
    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme["base-background"]};
    }
  }
`