import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  .item {
    border: none;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  font-size: 18px;
  height: 50%;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  .small {
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 14px;
  }
`;

const ProductBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  width: 200px;
  height: 34px;
  margin: 15px 15px 0px 15px;
  background-color: #fff;
  border: 1px solid #03154e;
  outline: 0;
  color: #03154e;
  &:hover {
    cursor: pointer;
    background-color: #03154e;
    border: 0;
    outline: 0;
    color: #fff;
    transition: all ease 0.2s;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    margin-bottom: 20px;
    margin-top: 5px;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
    margin-top: 5px;
  }
`;

export const OrderContent = styled.div`
  display: flex;
  width: 70%;
  height: 72%;
  position: relative;
  .item {
    margin-left: 10px;
    padding-left: 10px;
    border: none;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
    height: 50%;
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
      margin-top: 20px;
    }
    @media screen and (max-width: 1000px) {
      margin-top: 18px;
    }
  }
`;

const CoverImg = styled.div`
  flex: 1;
  width: 270px;
  height: 270px;
  position: relative;
  @media screen and (max-width: 1000px) {
    width: 270px;
    height: 270px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 270px;
    height: 270px;
  }
`;

const OrderImg = styled.img`
  width: inherit;
  height: inherit;
  position: absolute;
  z-index: 0;
  box-shadow: 1px 1px 0px 3px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
`;

const Product = ({ product, onAdd }) => {
  console.log('??', product);
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
