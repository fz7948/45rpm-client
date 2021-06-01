import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { alertOrderModal } from '../../modules/modal';
import { useDispatch } from 'react-redux';

const MainOrderList = styled.div`
  height: 10vh;
  font-size: 23px;
  position: relative;
  right: 80px;
  top: 45px;
  width: 300px;
  padding: 10px 0px 0px 30px;
  color: #939393;
  cursor: pointer;
  transform: rotate(-90deg);
`;

const MainOrderUnList = styled.div`
  height: 10vh;
  font-size: 23px;
  position: relative;
  right: 80px;
  top: 20px;
  width: 300px;
  padding: 10px 0px 0px 30px;
  color: #939393;
  cursor: pointer;
  transform: rotate(-90deg);
  &:hover {
    color: #e0dede;
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

const Base = styled.div`
  background: #495263;
  display: inline-block;
  height: 300px;
  margin-left: 350px;
  margin-top: -400px;
  margin-bottom: -300px;
  position: relative;
  width: 100px;
  z-index: 10;
  transform: rotate(90deg);
  &:before {
    border-bottom: 35px solid #495263;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
`;

const UnBase = styled.div`
  background: #f8f8f8;
  display: inline-block;
  height: 270px;
  margin-left: 100px;
  margin-top: -20px;
  position: relative;
  left: 90px;
  top: 15px;
  width: 100px;
  transform: rotate(90deg);

  &:before {
    border-bottom: 35px solid #f8f8f8;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
`;

const OrderMain = ({ products, onAdd }) => {
  const dispatch = useDispatch();

  const orderHandler = () => {
    dispatch(alertOrderModal());
  };
  return (
    <>
      <Base>
        <MainOrderList style={{ color: 'white' }}>01 주문서 작성</MainOrderList>
      </Base>
      <UnBase>
        <MainOrderUnList onClick={orderHandler}>02 결제완료</MainOrderUnList>
      </UnBase>
      <UnBase>
        <MainOrderUnList onClick={orderHandler}>03 주문완료</MainOrderUnList>
      </UnBase>
      <UnBase>
        <MainOrderUnList onClick={orderHandler}>04 배송확인</MainOrderUnList>
      </UnBase>

      <MainReadyList>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} />
        ))}
      </MainReadyList>
    </>
  );
};

export default OrderMain;
