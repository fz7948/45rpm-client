import styled from 'styled-components';
import { FaQuestion } from 'react-icons/fa';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #03154e, #311788);
`;

export const InquiryWrapper = styled.div `
  width: 100%;
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InquiryContainer = styled.div `
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 1);
  background: #f5f5dc;
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  overflow: auto;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 100%;
    margin: 1rem;
  }
`;

export const InquiryTitle = styled.h1 `
  text-shadow: 2px 2px 20px yellow;
  text-align: center;
  font-size: 4rem;
  font-family: 'Nanum Brush Script', cursive;
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const InquiryContent = styled.div `
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  padding: 1rem;
`;

export const Title = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Nanum Brush Script', cursive;
  font-size: 1.4rem;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 10px #fa8072;

  &:hover {
    box-shadow: 0 0 10px rgba(233, 228, 206);
    transform: translateY(10px);
  }

  &:active {
    transform: translateY(-10px);
  }
`;

export const TextWrapper = styled.div `
  display: flex;
  flex-direction: column;
`;
export const InnerContent = styled.div `
  font-size: 1.6rem;
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.button `
  border-radius: 20px;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Nanum Brush Script', cursive;
  width: 200px;
  background-image: linear-gradient(
    120deg,
    #264986 20%,
    #5f78a3 50%,
    #dee0e5 100%
  );
  &:hover {
    animation: slidebg 5s linear infinite;
  }

  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    width: 100px;
  }
`;

export const QuestIcon = styled(FaQuestion)
`
  color: #000;
  font-size: 2rem;
`;