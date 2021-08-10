import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { HeaderBtn, HeaderCart, HeaderTitle } from './styles';

const OrderHeader = ({ countCartItems }) => {
  return (
    <>
      <HeaderTitle>
        <div>나만의 커스텀을 직접 만나보세요</div>
        <div className="small">
          직접 만든 커스텀 LP를 저렴한 가격으로 만나보세요 !
        </div>
      </HeaderTitle>
      <HeaderCart>
        <div className="icon">
          <HiShoppingCart></HiShoppingCart>
        </div>
        {countCartItems ? <HeaderBtn>{countCartItems}</HeaderBtn> : ''}
      </HeaderCart>
    </>
  );
};

export default OrderHeader;
