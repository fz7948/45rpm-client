import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { alertOrderModal } from '../../modules/modal';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ContentWrapper } from '../../components/common/SharingStyle';

const MainOrderList = styled.div`
  height: 100px;
  font-size: 23px;
  position: relative;
  right: 68px;
  top: 35px;
  width: 300px;
  padding: 10px 0px 0px 30px;
  color: #939393;
  cursor: pointer;
  transform: rotate(-90deg);
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
  }
  @media screen and (max-width: 1000px) {
  }
`;

const MainOrderUnList = styled.div`
  height: 100px;
  font-size: 23px;
  position: relative;
  right: 68px;
  top: 30px;
  width: 300px;
  padding: 10px 0px 0px 30px;
  color: #939393;
  cursor: pointer;
  transform: rotate(-90deg);
  &:hover {
    color: #e0dede;
  }
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
    border-bottom: 36px solid #495263;
    border-left: 51px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  @media screen and (min-width: 1000px) and (max-width: 1350px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
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
  @media screen and (min-width: 1000px) and (max-width: 1350px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const OrderMain = ({ products, onAdd }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));

  const [customData, setCustomData] = useState([]);

  const orderHandler = () => {
    dispatch(alertOrderModal());
  };

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_SERVER_URI}/customs/my-customs`, {
          headers: {
            authorization: `Bearer ${token}`,
            withCredential: true,
          },
        })
        .then((response) => {
          setCustomData(response.data.data);
        });
    }
  }, [token]);

  return (
    <>
      <Base>
        <MainOrderList style={{ color: 'white' }}>01 주문서 작성</MainOrderList>
      </Base>
      <UnBase className="twoItem">
        <MainOrderUnList onClick={orderHandler}>02 결제완료</MainOrderUnList>
      </UnBase>
      <UnBase className="threeItem">
        <MainOrderUnList onClick={orderHandler}>03 주문완료</MainOrderUnList>
      </UnBase>
      <UnBase className="fourItem">
        <MainOrderUnList onClick={orderHandler}>04 배송확인</MainOrderUnList>
      </UnBase>

      <ContentWrapper>
        {customData.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </ContentWrapper>
    </>
  );
};

export default OrderMain;
