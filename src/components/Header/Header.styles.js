import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 15px 0;
  margin: 0 auto;
  color: var(--white);

  .loggedin {
    font-size: var(--fontSmall);
  }

  .login, .logout {
    border-radius: 20px;
    padding: 10px;
    border: 2px solid var(--white);
    font-size: var(--fontSmall);
  }

  a {
    color: var(--white);
    text-decoration: none;
    padding: 10px;
  }

  a:hover {
    cursor: crosshair;
  }

  .group {
    display: flex;
    align-items: center;
    width: 25%;
    justify-content: ${(props) =>
    props.user
    ? 'space-between'
    : 'flex-end'};

    @media (max-width: 500px) {
      width: fit-content;
    }
  }

`;

export const LogoImg = styled.img`
  width: 150px;

  @media (max-width: 500px) {
    width: 120px;
  }
`;
