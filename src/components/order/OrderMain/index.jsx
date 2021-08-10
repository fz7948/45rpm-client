import React, { useEffect, useState } from 'react';
import Product from '../Product/index';
import { alertOrderModal } from '../../../modules/modal';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ContentWrapper } from '../../Sharing/styles';
import { Base, MainOrderList, MainOrderUnList, UnBase } from './styles';

const OrderMain = ({ onAdd }) => {
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
