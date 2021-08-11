import styled from 'styled-components';

export const AlertCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -70px;
  left: 195px;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.3rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
`;

export const AlertIcon = styled.div`
  font-size: 30px;
  color: red;
  position: relative;
  bottom: 40px;
`;

export const AlertFont = styled.div`
  position: relative;
  bottom: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
  font-size: 1.5rem;
`;
