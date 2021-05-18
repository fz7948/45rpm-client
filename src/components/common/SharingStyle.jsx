import styled from 'styled-components';

export const Container = styled.div `
  border: 3px solid black;
  ${
    '' /* width: 100vw;
  height: 80vh; */
  }
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div `
  border: 3px solid blue;
  width: 100%;
  height: 20vh;
`;

export const ContentWrapper = styled.div `
  display: flex;
  width: 100vw;
  height: 50vh;
  border: 3px solid yellow;
`;

export const ImgWrapper = styled.div `
  display: flex;
  flex: 1;
  border: 3px solid blue;
`;

export const Img = styled.img ``;

export const SharingWrapper = styled.div `
  flex: 1;
  border: 3px solid gray;
`;

export const SharingArray = styled.div `
  width: 100px;
  height: 100px;
  border: 3px solid red;
`;

export const ContinueBtn = styled.button `
  width: 100px;
  height: 100px;
`;