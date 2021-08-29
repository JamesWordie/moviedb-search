import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  background: var(--medGrey);
  width: 200px;
  border-radius: 20px;
  z-index: 1000;
  opacity: 0.8;
  border: 1px solid var(--lightGrey);
  `;

export const Content = styled.div`
  background: transparent;
  position: relative;
  color: var(--white);
  padding: 10px;

  p {
    margin: 15px auto 5px auto;
  }
`;

export const Button = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--white);
  background: transparent;
  border-radius: 50%;
`;
