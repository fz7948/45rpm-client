import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const LoginWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;

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
    list-style: none;
    margin-bottom: 0.5rem;
  }
  .deny-message {
    width: 230px;
    height: 12px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 1.6rem;
    margin-top: 1.5rem;
    color: ${palette.mainRed};
    word-break: keep-all;
  }
`;

export const LoginLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #707174;
  div {
    margin-bottom: 8px;
    padding-top: 10px;
  }
`;

export const LoginInput = styled.input`
  height: 1.6rem;
  width: 21rem;
  padding: 1.4rem;
  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 15.5px;
  font-weight: 500;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #313899;
    transition: all ease 0.3s;
  }
`;

export const LoginCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -3.3rem;
  left: 16.3rem;
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

export const LoginSubmitBtn = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 21rem;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 1.5rem 0rem;
  background-color: ${palette.main};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
  }
`;

export const LoginSocialBtn = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 21rem;
  border: 0;
  outline: 0;
  border-radius: 3px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: white;
  margin-top: 0.5rem;
  img.kakao {
    width: 295px;
    height: 42px;
  }

  & + & {
    margin-top: 0.5rem;
    margin-bottom: 4rem;
  }
`;
