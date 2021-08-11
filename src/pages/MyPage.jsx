import React from 'react';
import AuthTemplate from '../components/common/AutoTemplate';
import MypageForm from '../components/auth/MypageForm';

const MyPage = () => {
  return (
    <AuthTemplate>
      <MypageForm />
    </AuthTemplate>
  );
};

export default MyPage;
