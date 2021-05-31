import React from 'react';
import styled from 'styled-components';
import { HiShoppingCart } from 'react-icons/hi';

const HeaderTitle = styled.div`
  font-size: 30px;
  width: 90%;
  display: flex;
  justify-content: center;
  padding-left: 60px;
`;

const HeaderCart = styled.div`
  font-size: 20px;
  width: 10%;
  display: flex;
  align-items: center;
  padding-top: 10px;
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

const OrderMain = ({ countCartItems }) => {
  return (
    <>
      <HeaderTitle>주문 페이지</HeaderTitle>
      <HeaderCart>
        <div className="icon">
          <HiShoppingCart></HiShoppingCart>
        </div>
        {countCartItems ? <HeaderBtn>{countCartItems}</HeaderBtn> : ''}
      </HeaderCart>
    </>
  );
};

export default OrderMain;
