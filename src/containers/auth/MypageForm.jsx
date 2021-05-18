import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../components/auth/LoginModal';
import Modal2 from '../../components/auth/RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, closeModal } from '../../modules/modal';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const MypageForm = () => {
  const dispatch = useDispatch();
  const { checkModal } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
  }));

  const onSubmitHand = (data) => {};

  const onCancel = () => {
    dispatch(closeModal());
  };

  const openModal = () => {
    dispatch(showModal());
  };

  return (
    <>
      <Container>
        <Modal2
          open={checkModal}
          close={onCancel}
          onSubmitHand={onSubmitHand}
        ></Modal2>
        <Button onClick={openModal}>I'm a modal</Button>
      </Container>
    </>
  );
};

export default MypageForm;
