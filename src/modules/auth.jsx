import * as authAPI from '../lib/api/auth';

const REGISTER = 'REGISTER';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';
const REGISTER_RESET_MSG = 'REGISTER_RESET_MSG';

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const LOGIN_RESET_MSG = 'LOGIN_RESET_MSG';

const UPDATE = 'UPDATE';
const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
const UPDATE_FAILURE = 'UPDATE_FAILURE';

// const INFORMATION = 'INFORMATION';
// const INFORMATION_SUCCESS = 'INFORMATION_SUCCESS';
// const INFORMATION_FAILURE = 'INFORMATION_FAILURE';

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
    console.log('로그인 Res', loginRes);
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

export const updateReq = (
  email,
  username,
  oldpassword,
  newpassword,
  token,
) => async (dispatch) => {
  dispatch({ type: UPDATE });
  try {
    console.log('토큰 확인', token);
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
      updateError: error.response.message,
    });
  }
};

// export const userInfoReq = () => async (dispatch) => {
//   dispatch({
//     type: INFORMATION,
//   });

//   try {
//     const infoRes = await authAPI.info();
//     dispatch({
//       type: INFORMATION_SUCCESS,
//       info: infoRes,
//     });
//   } catch (error) {
//     dispatch({
//       type: INFORMATION_FAILURE,
//       infoError: error.response,
//     });
//   }
// };

export const resetRegister = () => ({ type: REGISTER });
export const resetRegisterMsg = () => ({ type: REGISTER_RESET_MSG });
export const resetLogin = () => ({ type: LOGIN });
export const resetLoginMsg = () => ({ type: LOGIN_RESET_MSG });
export const resetUpdate = () => ({ type: UPDATE });
// export const resetInfo = () => ({ type: INFORMATION });

const initialState = {
  register: null,
  registerError: null,
  login: null,
  loginError: null,
  update: null,
  updateError: null,
  info: null,
  infoError: null,
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
    case LOGIN_RESET_MSG:
      return {
        loginError: null,
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
    // case INFORMATION:
    //   return {
    //     ...state,
    //     info: null,
    //     infoError: null,
    //   };
    // case INFORMATION_SUCCESS:
    //   return {
    //     ...state,
    //     info: action.info,
    //     infoError: null,
    //   };
    // case INFORMATION_FAILURE:
    //   return {
    //     ...state,
    //     infoError: action.infoError,
    //   };
    default:
      return state;
  }
}

export default auth;
