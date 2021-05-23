import styled from 'styled-components';

export const MyPageWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #03154e, #311788);
`;

export const MyPageContent = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 100%;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 6px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;

export const MyPageInfoWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const MyPageImage = styled.div `
  flex: 1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 200px;
  border: 2px dashed #ccc;
  color: #fff;
  img {
    height: 1rem;
    opacity: 0.5;
  }
  p {
    opacity: 0.7;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
  &:hover {
    background-color: #f3667236;
    transition: 0.5s all ease;
  }
`;

export const MyPageInfo = styled.div `
  flex: 1.5;
  height: 200px;
  margin-left: 1rem;
  background: #ccc;
  padding: 30px;
  font-size: small;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
  p {
    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: 'Lato', sans-serif;
    @media screen and (max-width: 768px) {
      padding: 0.5rem;
      font-size: 1rem;
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
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    height: 100%;
  }
`;

export const MyPageButton = styled.button `
  border: 3px solid black;
  cursor: pointer;
  background-color: #eee;
  height: 5rem;
  width: 13rem;
  border-radius: 3px;
  outline: 0;
  font-family: 'Jua', sans-serif;
  font-size: 1.5rem;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
  }
  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 8.5rem;
    font-size: 1rem;
  }
`;