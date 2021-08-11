import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const BasketWrapper = styled.div`
  position: fixed;
  width: 500px;
  right: -20%;
  top: 20%;
  z-index: 10;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 75vh;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  padding: 0px 20px 0px 20px;
  &:hover {
    right: 0%;
    transition: all ease 1s;
  }
  @media screen and (min-width: 600px) and (max-width: 1300px) {
    right: -20%;
    &:hover {
      right: 0%;
    }
  }
  @media screen and (max-width: 600px) {
    right: -75%;

    &:hover {
      right: 0%;
    }
  }
`;

export const BasketTitle = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const BasketOrderList = styled.div`
  height: 40%;
  overflow: auto;
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

export const BasketOrder = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  font-size: 20px;
  margin-right: 10px;

  textarea {
    height: 25px;
    border: none;
    outline: none;
    resize: none;
    width: 180px;
    margin-right: -50px;
  }

  .small {
    font-size: 17px;
    padding-top: 4px;
  }

  button {
    outline: 0;
    border: none;
    width: 2rem;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      background-color: gray;
    }
  }
`;

export const BasketPrice = styled.div`
  margin-top: 50px;
  height: 50%;
  .price {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

export const PriceBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  width: 460px;
  height: 42px;
  margin: 100px 0px 20px 0px;
  background-color: ${palette.mainHover};
  outline: 0;
  color: #fff;
`;
