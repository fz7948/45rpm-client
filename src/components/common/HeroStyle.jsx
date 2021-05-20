import styled, { css } from 'styled-components';

import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section `
  width: 80%;
  height: 20vh;
  max-height: 1100px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div `
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HeroImage = styled.div `
  border: 3px solid blue;
  width: 100%;
  height: 100%;
  img {
    object-fit: contain;
    width: inherit;
    height: inherit;

    @media screen and (max-width: 768px) {
      object-fit: cover;
    }
  }
`;

export const HeroContent = styled.div `
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    margin-bottom: 1.2rem;
  }
`;

export const SliderButtons = styled.div `
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

export const arrowButtons = css `
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const PrevArrow = styled(IoArrowBack)
`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)
`
  ${arrowButtons}
`;