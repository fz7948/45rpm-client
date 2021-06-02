import styled, { css } from 'styled-components';

import { IoArrowForward, IoArrowBack } from 'react-icons/io5';

export const HeroSection = styled.section`
  width: 50%;
  height: 30vh;
  max-height: 1100px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #495362;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div`
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

export const HeroImage = styled.div`
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

export const HeroContent = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: calc(100% - 100px);
  color: #fff;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  button {
    width: 30px;
    height: 40px;
    font-size: 15px;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 6px;
    outline: 0;
    color: #fff;
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #000d1a;
  cursor: pointer;
  background: #fff;
  border-radius: 50px;
  padding: 10px;
  margin: 0rem 0.5rem 2rem 0.3rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #495362;
    border: 1px solid #fff;
    color: white;
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

export const Arrow = styled.div`
  display: flex;
`;

export const Button = styled.button`
  margin-top: 1rem;
  font-size: 15px;
  font-family: 'Jua', sans-serif;
  background-color: #fff;
  border: none;

  border-radius: 6px;
  outline: 0;
  cursor: pointer;
  width: 120px;
  height: 40px;
  &:hover {
    background-color: #495362;
    color: white;
    transition: all ease 0.4s;
    border: 1px solid #fff;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
    font-size: 1rem;
  }
`;
