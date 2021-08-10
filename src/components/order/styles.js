import styled from 'styled-components';

export const OrderWrapper = styled.div`
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

export const OrderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const OrderHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

export const OrderMainWrapper = styled.div`
  width: 80%;
  height: 100vh;
  z-index: 1;
`;

export const OrderBasketWrapper = styled.div`
  width: 20%;
  height: 100vh;
  z-index: 10;
`;
