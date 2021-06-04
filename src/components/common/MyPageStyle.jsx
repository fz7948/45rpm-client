import styled from 'styled-components';

export const MyPageWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100vw;
  height: 100vh;
`;

export const MyPageContent = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 1449px) {
    width: 60%;
    height: 100%;
  }
  @media screen and (max-width: 1378px) {
    width: 70%;
    height: 100%;
  }
  @media screen and (max-width: 1345px) {
    width: 80%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
  @media screen and (max-width: 639px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 100%;
  }
`;

export const MyPageInfoWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-left: 1rem;
  }
`;

export const MyPageImage = styled.div `
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 2px dashed #ccc;
  background: #fff;
  height: 230px;
  width: 14rem;
  margin-right: 1rem;
  color: #fff;
  img {
    height: 1rem;
    opacity: 1;
  }
  p {
    opacity: 0.7;
    font-size: 0.9rem;
    color: #000;
    margin-top: 0.5rem;
  }
  &:hover {
    background-color: #c8d2dd;
    opacity: 0.5;
    transition: 0.5s all ease;
  }

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const MyPageInfo = styled.div `
  flex: 1;
  height: 20rem;
  background: transparent;
  border-radius: 6px;
  padding: 2rem;
  @media screen and (max-width: 1000px) {
    flex: 1;
    padding: 2rem 0.9rem;
  }
  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: #4c4c4c;
    font-size: 40px;
    @media screen and (max-width: 1000px) {
      padding: 0.5rem;
      font-size: 1.5rem;
    }
  }
  .small {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 1.5rem;
    @media screen and (max-width: 1000px) {
      padding: 0.5rem;
      font-size: 1.2rem;
    }
  }
  .very {
    font-size: 1rem;
    font-weight: 500;
    margin-top: 3rem;
    @media screen and (max-width: 1000px) {
      font-size: 0.5rem;
    }
  }
`;

export const MyPageSlide = styled.div `
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    margin: 0 auto;
    margin-bottom: 3rem;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonWrapper = styled.div `
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const MyPageButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2.5rem;
  width: 14rem;
  border-radius: 4px;
  margin-top: 1.5rem;
  outline: 0;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  background-color: #d4d4d4;
  color: #4c4c4c;
  font-size: 1.1rem;
  &:hover {
    background-color: #4c4c4c;
    color: #ddd;
    transition: all ease 0.4s;
  }
  .space {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 14rem;
    font-size: 1rem;
  }
`;