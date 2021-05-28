import styled, { css } from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #03154e, #311788);
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

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CdCaseContent = styled.div `
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Disk = styled.div `
  flex: 1;
  position: absolute;
  width: 470px;
  height: 470px;
  top: 26%;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(0, 0, 3, 0.5);

  @media screen and (max-width: 768px) {
    width: 320px;
    height: 320px;
    position: absolute;
    top: 10%;
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
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
export const Img1 = styled.img `
  width: 150px;
  height: 150px;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
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

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
    position: absolute;
    top: 9%;
  }
`;

export const Img = styled.img `
  width: inherit;
  height: inherit;
`;

export const CustomContent = styled.div `
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CustomElement = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Lato', sans-serif;
  font-size: 2.5rem;
  border: 3px solid red;

  color: #fff;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Wrapper = styled.div `
  border: 3px solid yellow;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
`;

const Input = css `
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem;
  }
`;

export const CustomColor = styled.div `
  ${Input}
`;

export const CustomAlbumCover = styled.div `
  ${Input}
`;

export const CustomCenterCover = styled.div `
  ${Input}
`;

export const CustomTitleCover = styled.div `
  ${Input}
`;

export const CustomSongListCover = styled.div `
  ${Input}
`;

export const InputFile = styled.input `
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  width: 40%;
  border: 1px solid #fff;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    width: 50%;
    height: 44%;
  }
`;

export const TextInput = styled.input `
  font-size: 18px;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: plum;
  }
  background-color: '#000';
`;

export const SaveBtn = styled.button `
  background: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  padding: 5rem;
  font-size: 2.5rem;
  font-family: 'Lato', sans-serif;

  @media screen and (max-width: 768px) {
    padding: 3.5rem;
    font-size: 2rem;
  }
`;