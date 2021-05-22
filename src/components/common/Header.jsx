import React from 'react';
import '../../pages/sass/Header.scss';
import { loginModal, registerModal, closeModal } from '../../modules/modal';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';

const Header = () => {
  const { checkModal, isType } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
  }));

  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(loginModal());
  };

  const openRegisterModal = () => {
    dispatch(registerModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  const onSubmitHand = (data) => {};

  return (
    <header className="header">
      <div className="signIn" onClick={openLoginModal}>
        Sign In
      </div>
      <div className="signUp" onClick={openRegisterModal}>
        Sign Up
      </div>
      {isType === 'login' && (
        <LoginModal
          open={checkModal}
          close={shutModal}
          onSubmitHand={onSubmitHand}
        ></LoginModal>
      )}
      {isType === 'register' && (
        <RegisterModal open={checkModal} close={shutModal}></RegisterModal>
      )}
    </header>
  );
};

export default Header;
