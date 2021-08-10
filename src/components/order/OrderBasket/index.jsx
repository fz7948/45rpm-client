import React from 'react';
import { alertOrderModal } from '../../../modules/modal';
import { useDispatch } from 'react-redux';
import {
  BasketOrder,
  BasketOrderList,
  BasketPrice,
  BasketTitle,
  BasketWrapper,
  PriceBtn,
} from './styles';

const OrderBasket = ({ cartItems, onAdd, onRemove }) => {
  const dispatch = useDispatch();

  const itemsPrice = cartItems.reduce(
    (a, c) => a + (10000 + c.songList.length * 2000) * c.qty,
    0,
  );
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

  const payHandler = () => {
    dispatch(alertOrderModal());
  };
  return (
    <>
      <BasketWrapper>
        <BasketTitle>결제 목록</BasketTitle>
        <BasketOrderList>
          <BasketOrder>
            <div>
              {cartItems.length === 0 && (
                <div className="small">결제 대기중인 내역이 없습니다.</div>
              )}
            </div>
          </BasketOrder>
          {cartItems.map((item) => (
            <BasketOrder key={item._id}>
              <textarea>{item.title}</textarea>
              <div>
                <button onClick={() => onAdd(item)}>+</button>
                {item.qty}
                <button onClick={() => onRemove(item)}>-</button>
              </div>
              <div className="small">
                {10000 + item.songList.length * 2000}원
              </div>
            </BasketOrder>
          ))}
        </BasketOrderList>
        <BasketPrice>
          {cartItems.length !== 0 && (
            <>
              <div className="price">
                <div>상품 가격</div>
                <div>{itemsPrice}원</div>
              </div>
              <div className="price">
                <div>부가세</div>
                <div>{taxPrice.toFixed(0)}원</div>
              </div>
              <div className="price">
                <div>총 합계</div>
                <div>
                  <strong>{totalPrice.toFixed(0)}원</strong>
                </div>
              </div>
            </>
          )}
          <PriceBtn onClick={payHandler}>결제하기</PriceBtn>
        </BasketPrice>
      </BasketWrapper>
    </>
  );
};

export default OrderBasket;
