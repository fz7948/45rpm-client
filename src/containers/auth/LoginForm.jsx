import React from 'react';
import LoginModal from '../../components/auth/LoginModal';

const LoginForm = () => {
  return <LoginModal onSubmitHand={onSubmitHand}></LoginModal>;
};

export default LoginForm;
