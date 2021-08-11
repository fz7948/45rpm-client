import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const InfoWrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;

  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 5rem;
  }
  ul {
    padding: 0;
  }
`;

export const InfoLabel = styled.label`
  font-size: 2rem;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const InfoCloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 29rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.1rem;
  &:hover {
    color: ${palette.mainRed};
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    top: 1rem;
    left: 23rem;
  }
`;

export const ProducerLi = styled.li`
  padding-left: 1rem;
  font-weight: 500;
  margin-bottom: 30px;
  margin-left: 80px;
  .fontSize {
    font-size: 20px;
    margin: 20px 5px;
  }
`;

export const TitleLi = styled.li`
  padding-left: 1rem;
  font-weight: 500;
  margin-bottom: 30px;
  margin-left: 80px;
  .fontSize {
    font-size: 20px;
    margin: 20px 5px;
  }
`;

export const SongListLi = styled.li`
  padding-left: 1rem;
  margin-bottom: 30px;
  margin-left: 80px;
  .fontSize {
    font-size: 20px;
    margin: 20px 5px;
  }
`;

export const SongContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 20px;
  margin: 20px 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const SongTitle = styled.div`
  position: relative;
  bottom: 13px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
  padding-bottom: 1rem;
`;

export const UlComp = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 35%;
  font-size: 15px;
  font-family: 'Jua', sans-serif;
  background-color: #eee;
  border: 1px solid #fff;
  border-radius: 6px;
  outline: 0;
  cursor: pointer;
  width: 120px;
  height: 40px;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
    font-size: 1rem;
    left: 38%;
  }
`;
