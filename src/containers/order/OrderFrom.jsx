import React, { useState } from 'react';
import OrderMain from '../../components/order/OrderMain';
import OrderBasket from '../../components/order/OrderBasket';
import OrderHeader from '../../components/order/OrderHeader';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../modules/modal';
import AlertModal from '../../components/common/AlertModal';

const OrderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-top: 20px;
  background-color: #ffffff;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const OrderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const OrderHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const OrderMainWrapper = styled.div`
  width: 80%;
  height: 100vh;
  z-index: 1;
`;

const OrderBasketWrapper = styled.div`
  width: 20%;
  height: 100vh;
  z-index: 10;
`;

const OrderForm = () => {
  const dispatch = useDispatch();
  const { isType, alertCheck } = useSelector(({ modal }) => ({
    isType: modal.isType,
    alertCheck: modal.alertCheck,
  }));
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x,
        ),
      );
    }
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isType === 'alertOrder' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'서비스 준비중입니다.'}
        />
      )}
      <OrderWrapper>
        <OrderHeaderWrapper>
          <OrderHeader countCartItems={cartItems.length} />
        </OrderHeaderWrapper>
        <OrderItem>
          <OrderMainWrapper>
            <OrderMain onAdd={onAdd} />
          </OrderMainWrapper>
          <OrderBasketWrapper>
            <OrderBasket
              onRemove={onRemove}
              onAdd={onAdd}
              cartItems={cartItems}
            />
          </OrderBasketWrapper>
        </OrderItem>
      </OrderWrapper>
    </>
  );
};

export default OrderForm;
