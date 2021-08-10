import React from 'react';
import {
  OrderContent,
  OrderImg,
  CoverImg,
  ProductBtn,
  ProductName,
} from './styles';

const Product = ({ product, onAdd }) => {
  return (
    <>
      <div>
        <OrderContent>
          <CoverImg>
            <OrderImg
              src={`${process.env.REACT_APP_SERVER_URI}/${product.albumPic}`}
            />
          </CoverImg>
        </OrderContent>
        <OrderContent>
          <div className="item">
            <ProductName>
              <div className="small">{product.title}</div>
              <div className="small">
                {10000 + product.songList.length * 2000} 원
              </div>
            </ProductName>
            <ProductBtn onClick={() => onAdd(product)}>주문하기</ProductBtn>
          </div>
        </OrderContent>
      </div>
    </>
  );
};

export default Product;
