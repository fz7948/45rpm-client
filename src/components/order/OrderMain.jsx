import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const MainOrder = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MainOrderList = styled.div`
  height: 10vh;
  font-size: 23px;
  padding: 10px 0px 0px 30px;
`;

const MainReadyList = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
`;

const OrderMain = ({ products, onAdd }) => {
  const orderHandler = () => {
    alert('준비중인 서비스입니다');
  };
  return (
    <>
      <MainOrder>
        <MainOrderList>주문대기 커스텀</MainOrderList>
        <MainOrderList onClick={orderHandler}>결제완료 커스텀</MainOrderList>
      </MainOrder>

      <MainReadyList>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </MainReadyList>
    </>
  );
};

export default OrderMain;
