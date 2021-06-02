import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  text-align: center;

  @media screen and (max-width: 1000px) {
    text-align: center;
    padding: 4rem;
  }
`;

export const H1Title = styled.h1`
  color: #ffffff;
  font-size: 4.7rem;
  font-family: 'Lato', sans-serif;
  padding-bottom: 1rem;

  @media screen and (max-width: 1000px) {
    font-size: 2.7rem;
  }
`;

export const SubTitle = styled.h5`
  color: #ffffff;
  font-size: 2rem;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 6rem;
  padding-top: 8rem;
  padding-bottom: 3rem;
  padding-left: 12rem;
  margin-bottom: 4rem;
  width: 96%;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
    grid-row-gap: 4rem;
    padding-left: 6rem;
  }

  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    grid-row-gap: 5rem;
    padding-left: 6rem;
  }
`;

export const CdCaseContent = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  position: relative;
`;

export const CoverImg = styled.div`
  flex: 1;
  width: 270px;
  height: 270px;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: 250px;
    height: 250px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 350px;
    height: 350px;
  }
`;

export const Img = styled.img`
  width: inherit;
  height: inherit;
  position: absolute;
  z-index: 2;
  box-shadow: 1px 1px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

export const Disk = styled.div`
  flex: 1;
  width: 280px;
  height: 280px;
  position: absolute;
  top: 6%;
  left: 35%;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    width: 230px;
    height: 230px;
    top: 1rem;
    position: absolute;
    left: 45%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 8%;
    left: 45%;
  }

  &:hover {
    animation: rotation 2s linear infinite;
    left: 50%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const InnerDisk = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  border-radius: 50%;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }
  @media screen and (max-width: 1000px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 100px;
    height: 100px;
  }
`;

export const Img1 = styled.img `
  width: 90px;
  height: 90px;
  border-radius: 50%;

  @media screen and (max-width: 1000px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 100px;
    height: 100px;
  }
`;

export const ContinueBtn = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 1rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  text-transform: uppercase;
  font-family: 'Jua', sans-serif;
  font-size: 1.5rem;
  outline: none;
  margin-bottom: 5rem;

  @media screen and (max-width: 1000px) {
    width: calc(20vw + 6px);
    height: calc(7vw + 6px);
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;
