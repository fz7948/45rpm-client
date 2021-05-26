import * as customAPI from '../lib/api/custom';

const CUSTOM = 'CUSTOM';
const CUSTOM_SUCCESS = 'CUSTOM_SUCCESS';
const CUSTOM_FAILURE = 'CUSTOM_FAILURE';

export const customAddReq = (token, formData) => async (dispatch) => {
  console.log('디스패치 토큰', token);
  dispatch({ type: CUSTOM });
  try {
    const customAddRes = await customAPI.customAdd({ token, formData });
    dispatch({
      type: CUSTOM_SUCCESS,
      customAdd: customAddRes,
    });
  } catch (error) {
    dispatch({
      type: CUSTOM_FAILURE,
      customError: error,
    });
  }
};

export const resetCustomAdd = () => ({ type: CUSTOM });

const initialState = {
  customAdd: null,
  customError: null,
};

function custom(state = initialState, action) {
  switch (action.type) {
    case CUSTOM:
      return {
        ...state,
        customAdd: null,
        customError: null,
      };
    case CUSTOM_SUCCESS:
      return {
        ...state,
        customAdd: action.customAdd,
        customError: null,
      };
    case CUSTOM_FAILURE:
      return {
        ...state,
        customAdd: null,
        customError: action.customError,
      };
    default:
      return state;
  }
}

export default custom;
