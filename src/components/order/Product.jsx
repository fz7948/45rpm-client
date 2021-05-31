import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 200px;
    display: flex;
  }
  .item {
    border: none;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  }
`;

const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 0px 15px 0px;
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
  margin: 0px 15px;
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
`;

const Product = ({ product, onAdd }) => {
  return (
    <ProductWrapper>
      <div className="item">
        <img className="small" src={product.image} alt={product.name} />
        <ProductName>
          <h3>{product.name}</h3>
          <div>{product.price} 원</div>
        </ProductName>
        <ProductBtn onClick={() => onAdd(product)}>주문하기</ProductBtn>
      </div>
    </ProductWrapper>
  );
};

export default Product;
