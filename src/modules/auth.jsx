import * as authAPI from '../lib/api/auth';

const REGISTER = 'REGISTER';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const REGISTER_RESET_MSG = 'REGISTER_RESET_MSG';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_RESET_MSG = 'LOGIN_RESET_MSG';

const KAKAO_LOGIN = 'KAKAO_LOGIN';
const KAKAO_LOGIN_SUCCESS = 'KAKAO_LOGIN_SUCCESS';
const KAKAO_LOGIN_FAILURE = 'KAKAO_LOGIN_FAILURE';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';

const UPDATE = 'UPDATE';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
const UPDATE_FAILURE = 'UPDATE_FAILURE';
const UPDATE_RESET_MSG = 'UPDATE_RESET_MSG';

const INFORMATION = 'INFORMATION';
const INFORMATION_SUCCESS = 'INFORMATION_SUCCESS';
const INFORMATION_FAILURE = 'INFORMATION_FAILURE';

export const registerReq =
  (id, email, username, password) => async (dispatch) => {
    dispatch({ type: REGISTER });
    try {
      const registerRes = await authAPI.signup({
        id,
        email,
        username,
        password,
      });
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

export const kakaoLoginReq = (data) => async (dispatch) => {
  dispatch({ type: KAKAO_LOGIN });
  try {
    const kakaoLoginRes = await authAPI.kakaoLogin(data);
    const token = document.cookie.split('=')[1];
    const payload = {
      id: kakaoLoginRes.data.id,
      email: kakaoLoginRes.data.email,
      username: kakaoLoginRes.data.username,
      token: token,
    };
    try {
      sessionStorage.setItem('id', payload.id);
    } catch (e) {
      console.log('sessionStorage is not working');
    }
    dispatch({
      type: KAKAO_LOGIN_SUCCESS,
      login: kakaoLoginRes,
      isSocial: 'kakao',
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: KAKAO_LOGIN_FAILURE,
      loginError: error.response.data.message,
    });
  }
};

export const googleLoginReq = (data) => async (dispatch) => {
  dispatch({ type: GOOGLE_LOGIN });
  try {
    const googleLoginRes = await authAPI.googleLogin(data);
    try {
      sessionStorage.setItem('id', data.email.split('@')[0]);
    } catch (err) {
      console.error('sessionStorage is not working on google social login');
    }
    dispatch({
      type: GOOGLE_LOGIN_SUCCESS,
      login: googleLoginRes,
      isSocial: 'google',
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GOOGLE_LOGIN_FAILURE,
      loginError: err.response.data.message,
    });
  }
};

export const updateReq =
  (email, username, oldpassword, newpassword, token) => async (dispatch) => {
    dispatch({ type: UPDATE });
    try {
      const updateRes = await authAPI.update({
        email,
        username,
        oldpassword,
        newpassword,
        token,
      });
      dispatch({
        type: UPDATE_SUCCESS,
        update: updateRes,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_FAILURE,
        updateError: error.response.data.message,
      });
    }
  };

export const userInfoReq = (token) => async (dispatch) => {
  dispatch({ type: INFORMATION });
  try {
    const infoRes = await authAPI.info(token);
    dispatch({
      type: INFORMATION_SUCCESS,
      info: infoRes,
    });
  } catch (error) {
    dispatch({
      type: INFORMATION_FAILURE,
      infoError: error.response,
    });
  }
};

export const resetRegister = () => ({ type: REGISTER });
export const resetRegisterMsg = () => ({ type: REGISTER_RESET_MSG });
export const resetLogin = () => ({ type: LOGIN });
export const resetLoginMsg = () => ({ type: LOGIN_RESET_MSG });
export const resetUpdate = () => ({ type: UPDATE });
export const resetUpdateMsg = () => ({ type: UPDATE_RESET_MSG });
export const resetInfo = () => ({ type: INFORMATION });

const initialState = {
  register: null,
  registerError: null,
  login: null,
  loginError: null,
  update: null,
  updateError: null,
  info: null,
  infoError: null,
  isSocial: null,
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
    case REGISTER_RESET_MSG:
      return {
        registerError: null,
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
    case KAKAO_LOGIN:
      return {
        ...state,
        login: null,
        loginError: null,
      };
    case KAKAO_LOGIN_SUCCESS:
      return {
        ...state,
        login: action.login,
        isSocial: action.isSocial,
        loginError: null,
      };
    case KAKAO_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.loginError,
      };
    case GOOGLE_LOGIN:
      return {
        ...state,
        login: null,
        loginError: null,
      };
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        login: action.login,
        isSocial: action.isSocial,
        loginError: null,
      };
    case GOOGLE_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.loginError,
      };
    case LOGIN_RESET_MSG:
      return {
        loginError: null,
        isSocial: null,
      };
    case UPDATE:
      return {
        ...state,
        update: null,
        updateError: null,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        update: action.update,
        updateError: null,
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        updateError: action.updateError,
      };
    case UPDATE_RESET_MSG:
      return {
        updateError: null,
      };
    case INFORMATION:
      return {
        ...state,
        info: null,
        infoError: null,
      };
    case INFORMATION_SUCCESS:
      return {
        ...state,
        info: action.info,
        infoError: null,
      };
    case INFORMATION_FAILURE:
      return {
        ...state,
        infoError: action.infoError,
      };
    default:
      return state;
  }
}

export default auth;
