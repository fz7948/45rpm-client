import * as questionAPI from '../lib/api/question';

const QUESTION = 'QUESTION';
const QUESTION_ADD = 'QUESTION_ADD';
const QUESTION_FAILURE = 'QUESTION_FAILURE';

const QUESTION_UPDATE = 'QUESTION_UPDATE';
const QUESTION_UPDATE_SUCCESS = 'QUESTION_UPDATE_SUCCESS';
const QUESTION_UPDATE_FAILURE = 'QUESTION_UPDATE_FAILURE';

export const questionAdd = (title, contents, category, token) => async (
  dispatch,
) => {
  dispatch({ type: QUESTION });
  try {
    const questionRes = await questionAPI.questionAdd({
      title,
      contents,
      category,
      token,
    });
    dispatch({
      type: QUESTION_ADD,
      question: questionRes,
    });
  } catch (error) {
    dispatch({
      type: QUESTION_FAILURE,
      questionError: error.response.message,
    });
  }
};

export const questionUpdate = () => async (dispatch) => {
  dispatch({ type: QUESTION_UPDATE });
  try {
    const questionUpdateRes = await questionAPI.questionAdd({});
    dispatch({
      type: QUESTION_UPDATE_SUCCESS,
      question: questionUpdateRes,
    });
  } catch (error) {
    dispatch({
      type: QUESTION_UPDATE_FAILURE,
      questionError: error.response.message,
    });
  }
};

export const resetQuestion = () => ({ type: QUESTION });
export const resetUpdateQuestion = () => ({ type: QUESTION_UPDATE });

const initialState = {
  question: null,
  questionError: null,
  questionUpdate: null,
  questionUpdateError: null,
};

function question(state = initialState, action) {
  switch (action.type) {
    case QUESTION:
      return {
        ...state,
        question: null,
        questionError: null,
      };
    case QUESTION_ADD:
      return {
        ...state,
        question: action.question,
        questionError: null,
      };
    case QUESTION_FAILURE:
      return {
        ...state,
        question: null,
        questionError: null,
      };
    case QUESTION_UPDATE:
      return {
        ...state,
        questionUpdate: null,
        questionUpdateError: null,
      };
    case QUESTION_UPDATE_SUCCESS:
      return {
        ...state,
        questionUpdate: action.questionUpdate,
        questionUpdateError: null,
      };
    case QUESTION_UPDATE_FAILURE:
      return {
        ...state,
        questionUpdate: null,
        questionUpdateError: null,
      };
    default:
      return state;
  }
}

export default question;
