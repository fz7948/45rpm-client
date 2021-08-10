import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const RegisterWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 2.6rem;
  }
  ul {
    padding: 0;
  }
  li {
    position: relative;
    list-style: none;
    margin-bottom: 1rem;
  }
  .deny-message {
    width: 275px;
    height: 12px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 1rem;
    margin-top: 1rem;
    color: ${palette.mainRed};
    word-break: keep-all;
  }
`;

export const RegisterLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #707174;
  div {
    margin-bottom: 8px;
  }
`;

export const RegisterInput = styled.input`
  height: 1.6rem;
  width: 21rem;
  padding: 1.4rem;
  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 15.5px;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #313899;
    transition: all ease 0.3s;
  }
`;

export const RegisterCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -1.6rem;
  left: 17rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.4rem;
  &:hover {
    color: ${palette.mainRed};
    transition: all ease 0.2s;
  }
`;

export const RegisterSubmitBtn = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 21rem;
  border-radius: 3px;
  margin-top: 2rem;
  border: 0;
  outline: 0;
  margin-bottom: 2.2rem;
  background-color: ${palette.main};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
  }
`;
