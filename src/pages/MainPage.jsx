import React from 'react';
import Main from '../components/main/Main';
import AuthTemplate from '../containers/auth/AutoTemplate';

const MainPage = () => {
  return (
    <AuthTemplate>
      <Main />
    </AuthTemplate>
  );
};

export default MainPage;
