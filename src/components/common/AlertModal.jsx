import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from './ModalStyle';
import styled from 'styled-components';
import { FaExclamation } from 'react-icons/fa';

const AlertCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: -55px;
  left: 170px;
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

const AlertIcon = styled.div`
  font-size: 20px;
  color: red;
  position: relative;
  bottom: 20px;
`;

const AlertFont = styled.div`
  position: relative;
  bottom: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
`;

const AlertModal = ({ openHandle, closeHandle, comment }) => {
  console.log(comment);
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(openHandle);

  useEffect(() => {
    if (localVisible && !openHandle) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(openHandle);
  }, [localVisible, openHandle]);

  if (!animate && !localVisible) return null;

  setTimeout(closeHandle, 1000);

  return (
    <>
      <ModalBack disappear={!openHandle}>
        <div className="modal_outsider" onClick={closeHandle}></div>
        <ModalBox disappear={!openHandle} alert>
          <AlertCloseBtn onClick={closeHandle}>X</AlertCloseBtn>
          <AlertIcon>
            <FaExclamation />
          </AlertIcon>
          <AlertFont>{comment}</AlertFont>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default AlertModal;
