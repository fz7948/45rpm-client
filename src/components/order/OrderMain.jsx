import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { alertOrderModal } from '../../modules/modal';
import { useDispatch } from 'react-redux';

const MainOrder = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MainOrderList = styled.div`
  height: 10vh;
  font-size: 23px;
  padding: 10px 0px 0px 30px;
  cursor: pointer;
  &:hover {
    color: lightgray;
  }
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
  const dispatch = useDispatch();

  const orderHandler = () => {
    dispatch(alertOrderModal());
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
