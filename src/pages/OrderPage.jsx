import React from 'react';
import OrderFrom from '../components/order';
import AuthTemplate from '../components/common/AutoTemplate';

const OrderPage = () => {
  return (
    <AuthTemplate>
      <OrderFrom />
    </AuthTemplate>
  );
};

export default OrderPage;
