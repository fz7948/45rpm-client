import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from './ModalStyle';
import styled from 'styled-components';
import { FaExclamation } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';

const AlertCloseBtn = styled.button`
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

const AlertIcon = styled.div`
  font-size: 30px;
  color: red;
  position: relative;
  bottom: 40px;
`;

const AlertFont = styled.div`
  position: relative;
  bottom: 13px;
  font-weight: 600;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
  font-size: 1.5rem;
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
          <AlertCloseBtn onClick={closeHandle}>
            <GrFormClose />
          </AlertCloseBtn>
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
