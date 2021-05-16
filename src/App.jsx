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
      <Switch>
        <Route component={MainPage} part="/" exact />
        <Route component={InquiriesPage} part="/" />
        <Route component={MyPage} part="/" />
        <Route component={SharingPage} part="/" />
        <Route component={CustomPage} part="/" />
      </Switch>
    </>
  );
}

export default App;
