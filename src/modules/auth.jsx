import * as authAPI from '../lib/api/auth';

const REGISTER = 'REGISTER';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerReq = (id, email, username, password) => async (
  dispatch,
) => {
  dispatch({ type: REGISTER });
  try {
    console.log('뜨냐', id, email, username, password);
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

export const resetRegister = () => ({ type: REGISTER });

const initialState = {
  register: null,
  registerError: null,
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
    default:
      return state;
  }
}

export default auth;
