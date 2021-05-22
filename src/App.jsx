import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InquiriesPage from './pages/InquiriesPage';
import MyPage from './pages/MyPage';
import SharingPage from './pages/SharingPage';
import CustomPage from './pages/CustomPage';
import GlobalStyles from './components/common/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={CustomPage} path="/1" />
          <Route component={InquiriesPage} path="/2" />
          <Route component={MyPage} path="/mypage" />
          <Route component={SharingPage} path="/3" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
