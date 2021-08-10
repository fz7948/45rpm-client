import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 94.9vh;
  color: #000;
  overflow: auto;
  padding-top: 3rem;
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

export const H2Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.mainBorder};
  width: 70%;
  height: 100%;
  margin: 0 auto;
  font-size: 2rem;
  background: ${palette.side};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${palette.sideBack};
  padding-top: 5rem;

  .small.text {
    font-size: 1rem;
    padding: 10px 0px 15px 0px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 90%;
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
  }
`;
