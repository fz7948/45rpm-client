import React from 'react';
import styled from 'styled-components';
import { HiShoppingCart } from 'react-icons/hi';

const HeaderTitle = styled.div`
  font-size: 30px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #4c4c4c;
  .small {
    font-size: 15px;
    padding-top: 10px;
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
  background-color: #03154e;
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
          아직 연결된 주문제작 사이트가 없어 준비중인 서비스입니다
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
