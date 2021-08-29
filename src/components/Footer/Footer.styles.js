import styled from "styled-components";

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

  span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h3 {
      margin-right: 20px;
      color: var(--lightGrey);
      a {
        text-decoration: none;
        color: var(--jamesBlue);
      }
    }

    a {
      text-decoration: none;
      cursor: crosshair;
    }
  }

  @media( max-width: 500px) {
    h3 {
      font: var(--fontSmall);
    }
  }
`;

export const TMDBLogoImg = styled.img`
  width: 80px;

  @media (max-width: 500px) {
    max-width: 60px;
  }
`;

export const GitHub = styled.img`
  margin: 0 auto;
  width: 25px;
  vertical-align: middle;
`;
