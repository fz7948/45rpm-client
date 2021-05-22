import styled from 'styled-components';

export const MypageWrapper = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #03154E, #311788);
  }
  p {
    margin-bottom: 0.8rem;
  }
  .side {
    position: sticky;
    left: 90rem;
    height: 2rem;
    width: 2rem;
    opacity: 0.6;
    cursor: pointer;
  }
  .infoBtn {
     width:100%;
     display:flex;
     justify-content:center;

     @media screen and (max-width:768px) {
        padding-right:3.2rem;
     }
  }
`;

export const MypageContent = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 83vh;
  padding: 2.5rem 1.6rem;
  margin: 0 auto;
  background: #e8e8e8;
  border-radius: 6px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

export const MypageImage = styled.div `
  flex: 1.2;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 200px;
  border: 2px dashed #ccc;
  img {
    height: 1rem;
    opacity: 0.6;
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

export const MypageInfo = styled.div `
  flex: 2;
  height: 200px;
  margin-left: 1rem;
  background: #ccc;
  padding: 30px;
  font-size: small;
`;

export const MypageSlide = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 70%;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 0 auto;
    margin-top: 2rem;
    width: 90%;
  }
`;

export const MypageButton = styled.button `
  cursor: pointer;
  margin-top: 1rem;
  background-color: #eee;
  height: 3.5rem;
  width: 9rem;
  border-radius: 3px;
  border: 0;
  outline: 0;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
  }

  @media screen and (max-width: 768px) {
    height: 2.5rem;
    width: 8.5rem;
  }
`;