import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieinfo 1s;

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
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

  .rating-director {
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
      div > h3 {
        margin-top: 15px;
      }
    }
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: var(--white);
    color: var(--black);
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director, .release-date {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }

    @media (max-width: 768px) {
      margin: 0 0 0 20px;

      h3 {
        font-size: var(--fontSmall);
      }
    }
  }

  h1 {
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
