import React, { useState } from 'react';
import OrderMain from './OrderMain/index';
import OrderBasket from './OrderBasket/index';
import OrderHeader from './OrderHeader/index';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../modules/modal';
import AlertModal from '../common/Modal/AlertModal';
import {
  OrderBasketWrapper,
  OrderHeaderWrapper,
  OrderItem,
  OrderMainWrapper,
  OrderWrapper,
} from './styles';

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
