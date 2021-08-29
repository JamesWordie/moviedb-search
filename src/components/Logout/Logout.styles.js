import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  padding: 10px;
  background: transparent;

  button {
    opacity: 0.7;
    color: var(--white);
    background: transparent;
    padding: 5px 10px;
    border-radius: 20px;
    border: 1px solid var(--white);
    font: var(--fontMed);

    &:hover {
      opacity: 1;
    }
  }
`;
