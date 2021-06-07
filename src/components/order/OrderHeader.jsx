import React from 'react';
import styled from 'styled-components';
import { HiShoppingCart } from 'react-icons/hi';
import palette from '../../lib/styles/palette';

const HeaderTitle = styled.div`
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

const HeaderCart = styled.div`
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

const HeaderBtn = styled.button`
  background-color: ${palette.mainHover};
  color: white;
  width: 30px;
  height: 20px;
  border-radius: 10px;
`;

const OrderHeader = ({ countCartItems }) => {
  return (
    <>
      <HeaderTitle>
        <div>나만의 커스텀을 직접 만나보세요</div>
        <div className="small">
          직접 만든 커스텀 LP를 저렴한 가격으로 만나보세요 !
        </div>
      </HeaderTitle>
      <HeaderCart>
        <div className="icon">
          <HiShoppingCart></HiShoppingCart>
        </div>
        {countCartItems ? <HeaderBtn>{countCartItems}</HeaderBtn> : ''}
      </HeaderCart>
    </>
  );
};

export default OrderHeader;
