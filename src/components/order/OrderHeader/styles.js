import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const HeaderTitle = styled.div`
  margin-top: 20px;
  font-size: 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${palette.sideBack};
  .small {
    font-size: 20px;
    padding-top: 30px;
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1000px) {
      font-size: 15px;
    }
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    font-size: 35px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 27px;
  }
`;

export const HeaderCart = styled.div`
  font-size: 20px;
  width: 10%;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  div {
    padding-right: 8px;
  }
  .icon {
    padding-top: 6px;
  }
`;

export const HeaderBtn = styled.button`
  background-color: ${palette.mainHover};
  color: white;
  width: 30px;
  height: 20px;
  border-radius: 10px;
`;
