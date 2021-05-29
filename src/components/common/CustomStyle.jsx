import styled, { css } from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 94.5vh;
  background: lightgray;
`;

export const MainContentWrapper = styled.div `
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.div `
  display: flex;
  width: inherit;
  height: inherit;

  @media screen and (max-width: 1400px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CdCaseContent = styled.div `
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  border-right: 3px solid gray;
  border-bottom: none;
  margin-right: 1.5rem;
  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;
    flex: 1;
    margin-bottom: -0.5rem;
    border-right: none;
    border-bottom: 3px solid gray;
  }
`;

export const Disk = styled.div `
  flex: 1;
  position: absolute;
  width: 470px;
  height: 470px;
  top: 26%;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(0, 0, 3, 0.5);

  @media screen and (max-width: 1400px) {
    width: 210px;
    height: 210px;
    position: absolute;
    top: 8%;
  }

  &:hover {
    animation: rotation 2s linear infinite;
    left: 10%;
    transition-delay: 5s;
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

export const InnerDisk = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
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
  @media screen and (max-width: 1400px) {
    width: 60px;
    height: 60px;
  }
`;
export const Img1 = styled.img `
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media screen and (max-width: 1400px) {
    width: 60px;
    height: 60px;
  }
`;

export const CoverImg = styled.div `
  flex: 1;
  z-index: 1;
  transform: translateX(-40%);
  width: 500px;
  height: 500px;
  position: absolute;
  top: 25%;
  box-shadow: 1px 3px 2px 3px rgba(0, 1, 1, 1);

  @media screen and (max-width: 1400px) {
    width: 230px;
    height: 230px;
    position: absolute;
    top: 7%;
  }
`;

export const Img = styled.img `
  width: inherit;
  height: inherit;
`;

export const CustomContent = styled.div `
  flex: 1;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  border: 3px solid gray;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 1400px) {
    width: 80%;
    height: 68%;
    flex: 1;
    margin: 1rem auto;
  }
`;

export const CustomElement = styled.div `
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  font-size: 2.5rem;
  color: #fff;
  width: 100%;
  height: 100%;
  margin-top: 3rem;

  @media screen and (max-width: 1400px) {
    width: 70%;
    height: 45%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
`;

export const H2Title = styled.h2 `
  text-align: center;
  font-size: 4rem;

  @media screen and (max-width: 1400px) {
    font-size: 2.5rem;
    padding: 1rem;
  }
`;

export const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 2rem;
  width: 100%;
  height: 50%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  span {
    color: #fff;
    background: gray;
    padding: 0.9rem;
    border: none;
    margin: -0.9rem;
    &:hover {
      color: lightgray;
    }
    @media screen and (max-width: 1400px) {
      font-size: 0.8rem;
      padding: 0.8rem;
    }
  }
  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 25%;
    padding-top: 1rem;
    padding-bottom: 3rem;
  }
`;

const Input = css `
  display: flex;
  justify-content: center;
`;

export const CustomColor = styled.div `
  ${Input}
`;

export const CustomAlbumCover = styled.div `
  ${Input}
  padding: 3rem;
`;

export const CustomCenterCover = styled.div `
  ${Input}
  padding: 3rem;
`;

export const CustomTitleCover = styled.div `
  ${Input}
  padding: 3rem;
`;

export const CustomSongListCover = styled.div `
  ${Input}
  padding: 3rem;
`;

export const InputFile = styled.input `
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  width: 60%;
  border: 3px solid #fff;
  border-radius: 6px;
  padding: 3rem;

  @media screen and (max-width: 1400px) {
    font-size: 1rem;
    width: 300px;
  }
`;

export const TextInput = styled.input `
  font-size: 1.5rem;
  padding: 3rem;
  background: transparent;
  border-radius: 3px;
  border: 3px solid #fff;
  text-align: center;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
  background-color: '#000';
  @media screen and (max-width: 1400px) {
    font-size: 1rem;
    width: 300px;
  }
`;

export const SaveBtn = styled.button `
  background: transparent;
  color: #fff;
  cursor: pointer;
  outline: none;
  border: none;
  width: 100%;
  padding-bottom: 10rem;
  font-size: 2.5rem;
  font-family: 'Lato', sans-serif;

  @media screen and (max-width: 1400px) {
    width: 50%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8rem;
    margin-top: 7rem;
    font-size: 2.2rem;
  }
`;