import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import { checkUser } from './modules/user';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

const cookie = document.cookie.split('=')[1];

function loadUser() {
  try {
    const id = sessionStorage.getItem('id');
    if (!id) return;
    store.dispatch(checkUser(id, cookie));
  } catch (e) {
    console.log('sessionStorage is not working');
  }
}
loadUser();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
