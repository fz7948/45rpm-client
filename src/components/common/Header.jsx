import React from 'react';
import '../../pages/sass/Header.scss';
import { showModal, closeModal } from '../../modules/modal';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';

const Header = () => {
  const { checkModal } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
  }));

  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch(showModal());
  };
  const onSubmitHand = (data) => {};

  const shutModal = (e) => {
    dispatch(closeModal());
  };
  return (
    <header className="header">
      <div className="signIn" onClick={openModal}>
        Sign In
      </div>
      <RegisterModal
        open={checkModal}
        close={shutModal}
        onSubmitHand={onSubmitHand}
      ></RegisterModal>
      <LoginModal
        open={checkModal}
        close={shutModal}
        onSubmitHand={onSubmitHand}
      ></LoginModal>
      <div className="signUp" onClick={openModal}>
        Sign Up
      </div>
    </header>
  );
};

export default Header;
