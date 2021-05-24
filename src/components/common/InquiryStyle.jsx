import styled from 'styled-components';
import { FaQuestion } from 'react-icons/fa';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding-top: 3rem;
`;

export const InquiryContainer = styled.div `
  overflow: auto;
  border: 5px solid red;
  width: 100%;
  height: 100%;

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
  @media screen and (max-width: 768px) {
    border: 5px solid red;
    width: 100%;
    height: 100%;
    padding-top: 3rem;
    padding-right: 1rem;
  }
`;

export const InquiryTop = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    0rem;
  }
`;

export const InquiryTitle = styled.h1 `
  width: 100%;
  text-align: center;
  padding-left: 8rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    padding-left: 7rem;
  }
`;

export const Button = styled.button `
  width: 10rem;
  height: 3.5rem;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 3rem;
  }
`;

export const InquiryContent = styled.div `
  width: 100%;
  height: 100%;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgray;
  @media screen and (max-width: 768px) {
    padding: 0rem;
  }
`;

export const TextWrapper = styled.div `
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;

  h2 {
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h2 {
      margin-right: 1rem;
    }
  }
`;
export const InnerContent = styled.div `
  @media screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`;

export const QuestIcon = styled(FaQuestion)
``;