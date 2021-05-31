import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InquiriesPage from './pages/InquiriesPage';
import MyPage from './pages/MyPage';
import SharingPage from './pages/SharingPage';
import CustomPage from './pages/CustomPage';
import OrderPage from './pages/OrderPage';
import InquiryView from './components/Inquries/InquiryView';
import GlobalStyles from './components/common/GlobalStyles';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import { useSelector } from 'react-redux';

function App() {
  const { isLogin } = useSelector(({ user }) => ({
    isLogin: user.isLogin,
  }));
  return (
    <>
      <GlobalStyles />
      <Router>
        {isLogin ? <Sidebar /> : <Header />}
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={CustomPage} path="/1" />
          <Route component={InquiryView} exact path="/inquiryView/:id" />
          <Route component={InquiriesPage} path="/2" />
          <Route component={MyPage} path="/mypage" />
          <Route component={SharingPage} path="/3" />
          <Route component={OrderPage} path="/4" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
