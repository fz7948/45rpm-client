import React from 'react';
import OrderFrom from '../containers/order/OrderFrom';
import AuthTemplate from '../containers/auth/AutoTemplate';

const OrderPage = () => {
  return (
    <AuthTemplate>
      <OrderFrom />
    </AuthTemplate>
  );
};

export default OrderPage;
