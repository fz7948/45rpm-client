import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../ModalStyle';
import { FaExclamation } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { AlertCloseBtn, AlertFont, AlertIcon } from './styles';

const AlertModal = ({ openHandle, closeHandle, comment }) => {
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
