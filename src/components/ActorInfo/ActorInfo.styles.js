import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;

  p {
    margin-bottom: 50px;
  }
`;
