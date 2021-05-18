import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from './ModalStyle';
import styled from 'styled-components';

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
        <ModalBox disappear={!open}>
          <form onSubmit={onSubmitHandler}></form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default RegisterModal;
