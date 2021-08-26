import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px auto;

  button {
    color: var(--white);
    background-color: var(--medGrey);
    padding: 10px;
    border-radius: 50px;
    width: 80px;
    font-size: var(--fontMed);
    border: none;
  }

  span {
    margin: auto 5px;
  }
`;

export const Content = styled.div`
  display: inline-flex;
  width: 50%;
  justify-content: flex-start;
`;
