import React from 'react';
import AuthTemplate from '../containers/auth/AutoTemplate';
import MypageForm from '../containers/auth/MypageForm';

const MyPage = () => {
  return (
    <AuthTemplate>
      <MypageForm />
    </AuthTemplate>
  );
};

export default MyPage;
