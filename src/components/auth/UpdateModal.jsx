import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../common/ModalStyle';
import styled from 'styled-components';

const UpdateWrapper = styled.div`
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
  p {
    font-size: 12px;
    font-weight: 600;
    color: #707174;
    margin: 0;
    margin-bottom: 5px;
  }
  .update_info {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }
`;

const UpdateLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 4px;
`;

const UpdateInput = styled.input`
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

const UpdateCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: 0.5rem;
  left: 22rem;
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

const UpdateSubmitBtn = styled.button`
  height: 2.2rem;
  width: 16rem;
  border-radius: 3px;
  margin: 1.5rem;
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

const UpdateModal = ({ open, close, onSubmitHand }) => {
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
            <UpdateCloseBtn onClick={close}> X </UpdateCloseBtn>
            <UpdateWrapper>
              <h2> 계정 정보 수정 </h2>
              <div className="update_info">
                <p> E - mail은 변경이 불가능합니다. </p>
                <p> 닉네임을 입력하지 않을 시, 유지됩니다. </p>
              </div>
              <ul>
                <li>
                  <UpdateLabel>
                    <div> E - mail </div>
                  </UpdateLabel>
                  <UpdateInput type="email" placeholder="fz7948@gmail.com" />
                </li>
                <li>
                  <UpdateLabel>
                    <div> 닉네임 </div>
                  </UpdateLabel>
                  <UpdateInput type="text" placeholder="오우영" />
                </li>
                <li>
                  <UpdateLabel>
                    <div> 비밀번호 </div>
                  </UpdateLabel>
                  <UpdateInput type="password" placeholder="Password" />
                </li>
                <li>
                  <UpdateLabel>
                    <div> 비밀번호 확인 </div>
                  </UpdateLabel>
                  <UpdateInput type="password" placeholder="Password Confirm" />
                </li>
              </ul>
              <UpdateSubmitBtn> 수정 완료 </UpdateSubmitBtn>
            </UpdateWrapper>
          </form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default UpdateModal;
