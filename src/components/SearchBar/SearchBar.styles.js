import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;

  @media (max-width: 720px) {
    height: 70px;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    // removes the outline from the input
    :focus {
      outline: none;
    }
  }

  @media (max-width: 720px) {
    height: 45px;

    img {
      width: 20px;
    }
    input {
      font-size: 20px;
      height: 30px;
      padding: 0 0 0 45px;
    }
  }
`;
