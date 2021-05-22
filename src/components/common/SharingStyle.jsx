import styled, { css } from 'styled-components';

const Common = css `
  &:hover {
    animation: slidebg 5s linear infinite;
  }
  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }
`;

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #143b7d, #fdfaf5);
`;

export const ContentWrapper = styled.div `
  display: flex;
  width: 100%;
  height: 60vh;
`;

export const ImgWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const LeftWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 2;
`;
export const Img = styled.img `
  width: inherit;
  height: inherit;
  object-fit: contain;
`;

export const SharingWrapper = styled.div `
  width: inherit;
  height: inherit;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgArray = styled.div `
  display: flex;
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 1);
  width: 100%;
  height: 80%;
  margin: 1rem;
  padding: 1rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1px;
    height: 15px;
  }
  ::-webkit-scrollbar-track {
    /* 스크롤이 움직이는 영역  */
    background-color: #f9f9f9;
  }
  ::-webkit-scrollbar-thumb {
    /*  스크롤  */
    background-color: gold;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 5px;
    background-color: #000;
  }
`;

export const Image = styled.img `
  display: inline-block;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 1rem;
  margin: 0 2%;
  cursor: pointer;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0);
  object-fit: cover;
  transition: all 0.3s ease-in-out 0s;

  &:hover {
    box-shadow: 0 0 10px 5px rgba(172, 126, 0, 0.781);
  }
`;

export const ContinueBtn = styled.button `
  width: 250px;
  height: 200px;
  font-weight: bold;
  font-family: 'Nanum Brush Script', cursive;
  font-size: 2rem;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-image: linear-gradient(
    120deg,
    #264986 20%,
    #5f78a3 50%,
    #dee0e5 100%
  );
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    width: 150px;
    height: 50px;
  }
  ${Common}
`;