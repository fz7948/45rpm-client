import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../common/ModalStyle';
import styled from 'styled-components';

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    position: relative;
    list-style: none;
    margin-bottom: 1rem;
  }
`;

const RegisterLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 4px;
`;

const RegisterInput = styled.input`
  height: 1rem;
  width: 16rem;
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

const RegisterCloseBtn = styled.button`
  position: relative;
  top: -2rem;
  left: 20rem;
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

const RegisterSubmitBtn = styled.button`
  height: 2.2rem;
  width: 16rem;
  border-radius: 3px;
  margin-top: 2rem;
  border: 0;
  outline: 0;
  margin-bottom: 0.5rem;
  background-color: #f73d5c;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  &:hover {
    background-color: #b3535b;
    transition: all ease 0.3s;
  }
`;

const RegisterModal = ({ open, close, onSubmitHand }) => {
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
        <ModalBox disappear={!open} register>
          <form onSubmit={onSubmitHandler}>
            <RegisterCloseBtn onClick={close}>X</RegisterCloseBtn>
            <RegisterWrapper>
              <h2>회원가입</h2>

              <ul>
                <li>
                  <RegisterLabel>
                    <div>E-mail</div>
                  </RegisterLabel>
                  <RegisterInput
                    type="email"
                    placeholder="사용하실 E-mail을 입력해주세요."
                  />
                </li>
                <li>
                  <RegisterLabel>
                    <div>닉네임</div>
                  </RegisterLabel>
                  <RegisterInput
                    type="text"
                    placeholder="사용하실 닉네임을 입력해주세요."
                  />
                </li>
                <li>
                  <RegisterLabel>
                    <div>비밀번호</div>
                  </RegisterLabel>
                  <RegisterInput type="password" placeholder="Password" />
                </li>
                <li>
                  <RegisterLabel>
                    <div>비밀번호 확인</div>
                  </RegisterLabel>
                  <RegisterInput
                    type="password"
                    placeholder="Password Confirm"
                  />
                </li>
              </ul>
              <RegisterSubmitBtn>회원가입</RegisterSubmitBtn>
            </RegisterWrapper>
          </form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default RegisterModal;
