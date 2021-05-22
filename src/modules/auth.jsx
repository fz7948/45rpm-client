import * as authAPI from '../lib/api/auth';

const REGISTER = 'REGISTER';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const registerReq = (id, email, username, password) => async (
  dispatch,
) => {
  dispatch({ type: REGISTER });
  try {
    const registerRes = await authAPI.signup({ id, email, username, password });
    dispatch({
      type: REGISTER_SUCCESS,
      register: registerRes,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      registerError: error.response.data.message,
    });
  }
};

export const loginReq = (id, password) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const loginRes = await authAPI.login({ id, password });
    dispatch({
      type: LOGIN_SUCCESS,
      login: loginRes,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      loginError: error.response.data.message,
    });
  }
};

export const resetRegister = () => ({ type: REGISTER });
export const resetLogin = () => ({ type: LOGIN });

const initialState = {
  register: null,
  registerError: null,
  login: null,
  loginError: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        register: null,
        registerError: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        register: action.register,
        registerError: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registerError: action.registerError,
      };
    case LOGIN:
      return {
        ...state,
        login: null,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.login,
        loginError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.loginError,
      };
    default:
      return state;
  }
}

export default auth;
