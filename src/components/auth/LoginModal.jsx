import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../common/ModalStyle';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0.5rem;
  }
`;

const LoginLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 4px;
`;

const LoginInput = styled.input`
  height: 1.2rem;
  width: 14rem;
  padding: 1rem;
  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 12px;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #f73d5c;
    transition: all ease 0.3s;
  }
`;

const LoginCloseBtn = styled.button`
  position: relative;
  top: -1rem;
  left: 16rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
`;

const LoginSubmitBtn = styled.button`
  height: 2.2rem;
  width: 14rem;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 1rem 0rem;
  background-color: #f73d5c;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  &:hover {
    background-color: #b3535b;
    transition: all ease 0.3s;
  }
`;

const LoginSocialBtn = styled.button`
  height: 2.2rem;
  width: 14rem;
  border: 0;
  outline: 0;
  border-radius: 3px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #e8e8e8;
  &:hover {
    background-color: #b6b3b3;
    transition: all ease 0.3s;
  }
  & + & {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const LoginModal = ({ open, close, onSubmitHand }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  if (!animate && !localVisible) return null;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHand();
  };

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={close}></div>
        <ModalBox disappear={!open}>
          <form onSubmit={onSubmitHandler}>
            <LoginCloseBtn onClick={close}>X</LoginCloseBtn>
            <LoginWrapper>
              <h2>로그인</h2>

              <ul>
                <li>
                  <LoginLabel>
                    <div>E-MAIL</div>
                  </LoginLabel>
                  <LoginInput type="email" placeholder="Email" required />
                </li>
                <li>
                  <LoginLabel>
                    <div>비밀번호</div>
                  </LoginLabel>
                  <LoginInput type="password" placeholder="Password" required />
                </li>
              </ul>
              <LoginSubmitBtn>로그인</LoginSubmitBtn>
              <LoginSocialBtn>구글</LoginSocialBtn>
              <LoginSocialBtn>카카오</LoginSocialBtn>
            </LoginWrapper>
          </form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default LoginModal;
