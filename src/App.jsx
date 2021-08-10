import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InquiriesPage from './pages/InquiriesPage';
import MyPage from './pages/MyPage';
import SharingPage from './pages/SharingPage';
import CustomPage from './pages/CustomPage';
import OrderPage from './pages/OrderPage';
import InquiryView from './components/Inquries/InquiryView/index';
import GlobalStyles from './components/common/GlobalStyles';
import Header from './components/common/Header/Header';
import Sidebar from './components/common/Sidebar/index';
import { useSelector } from 'react-redux';
import LoadingPage from './pages/LoadingPage/LoadingPage';

function App() {
  const { isLogin } = useSelector(({ user }) => ({
    isLogin: user.isLogin,
  }));
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3500);
  }, []);

  return (
    <>
      <GlobalStyles />
      {spinner ? (
        <LoadingPage />
      ) : (
        <Router>
          {isLogin ? <Sidebar /> : <Header />}
          <Switch>
            <Route component={MainPage} path="/" exact />
            <Route component={CustomPage} path="/custom" />
            <Route component={InquiryView} exact path="/inquiryView/:id" />
            <Route component={InquiriesPage} path="/inquiry" />
            <Route component={MyPage} path="/myPage" />
            <Route component={SharingPage} path="/sharing" />
            <Route component={OrderPage} path="/order" />
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
