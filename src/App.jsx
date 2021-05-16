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
          <Route component={MainPage} part="/" exact />
          <Route component={InquiriesPage} part="/" />
          <Route component={MyPage} part="/" />
          <Route component={SharingPage} part="/" />
          <Route component={CustomPage} part="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
