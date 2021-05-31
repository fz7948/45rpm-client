import * as questionAPI from '../lib/api/question';

const QUESTION_ADD = 'QUESTION';
const QUESTION_ADD_SUCCESS = 'QUESTION_ADD';
const QUESTION_ADD_FAILURE = 'QUESTION_FAILURE';

const QUESTION_UPDATE = 'QUESTION_UPDATE';
const QUESTION_UPDATE_SUCCESS = 'QUESTION_UPDATE_SUCCESS';
const QUESTION_UPDATE_FAILURE = 'QUESTION_UPDATE_FAILURE';

const QUESTION_LIST = 'QUESTION_LIST';
const QUESTION_LIST_SUCCESS = 'QUESTION_LIST_SUCCESS';
const QUESTION_LIST_FAILURE = 'QUESTION_LIST_FAILURE';

const QUESTION_DELETE = 'QUESTION_DELETE';
const QUESTION_DELETE_SUCCESS = 'QUESTION_DELETE_SUCCESS';
const QUESTION_DELETE_FAILURE = 'QUESTION_DELETE_FAILURE';

const DETAIL_UPDATE = 'DETAIL_UPDATE';
const DETAIL_LIST = 'DETAIL_LIST';

export const questionAddReq = (title, contents, category, token) => async (
  dispatch,
) => {
  dispatch({ type: QUESTION_ADD });
  try {
    const questionRes = await questionAPI.questionAdd({
      title,
      contents,
      category,
      token,
    });
    dispatch({
      type: QUESTION_ADD_SUCCESS,
      questionAdd: questionRes,
    });
  } catch (error) {
    dispatch({
      type: QUESTION_ADD_FAILURE,
      questionAddError: error,
    });
  }
};

export const questionUpdateReq = (questionId, title, contents, token) => async (
  dispatch,
) => {
  dispatch({ type: QUESTION_UPDATE });
  try {
    const questionUpdateRes = await questionAPI.questionUpdate({
      questionId,
      title,
      contents,
      token,
    });
    dispatch({
      type: QUESTION_UPDATE_SUCCESS,
      questionUpdate: questionUpdateRes,
    });
  } catch (error) {
    dispatch({
      type: QUESTION_UPDATE_FAILURE,
      questionUpdateError: error,
    });
  }
};

export const questionListReq = (token) => async (dispatch) => {
  console.log('토큰 받아오니?', token);
  dispatch({ type: QUESTION_LIST });
  try {
    const questionListRes = await questionAPI.questionList({ token });
    dispatch({
      type: QUESTION_LIST_SUCCESS,
      questionList: questionListRes,
    });
  } catch (error) {
    console.log('리스트 에러', error);
    dispatch({
      type: QUESTION_LIST_FAILURE,
      questionListError: error,
    });
  }
};

export const questionDeleteReq = (token, questionId) => async (dispatch) => {
  dispatch({ type: QUESTION_DELETE });
  try {
    const questionDeleteRes = await questionAPI.questionDelete({
      token,
      questionId,
    });
    dispatch({
      type: QUESTION_DELETE_SUCCESS,
      questionDelete: questionDeleteRes,
    });
  } catch (error) {
    console.log('DELETE ERROR', error);
    dispatch({
      type: QUESTION_DELETE_FAILURE,
      questionDeleteError: error,
    });
  }
};

export const detailListReq = () => ({ type: DETAIL_LIST });
export const detailUpdateReq = () => ({ type: DETAIL_UPDATE });

export const resetAddQuestion = () => ({ type: QUESTION_ADD });
export const resetUpdateQuestion = () => ({ type: QUESTION_UPDATE });
export const resetListQuestion = () => ({ type: QUESTION_LIST });

const initialState = {
  questionList: null,
  questionListError: null,
  questionListDelete: null,
  questionListDeleteError: null,
  questionAdd: null,
  questionAddError: null,
  questionUpdate: null,
  questionUpdateError: null,
  isDetail: null,
};

function question(state = initialState, action) {
  switch (action.type) {
    case QUESTION_ADD:
      return {
        ...state,
        questionAdd: null,
        questionAddError: null,
      };
    case QUESTION_ADD_SUCCESS:
      return {
        ...state,
        questionAdd: action.questionAdd,
        questionAddError: null,
      };
    case QUESTION_ADD_FAILURE:
      return {
        ...state,
        questionAdd: null,
        questionAddError: action.questionAddError,
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
        questionUpdateError: action.questionUpdateError,
      };
    case QUESTION_LIST:
      return {
        ...state,
        questionList: null,
        questionListError: null,
      };
    case QUESTION_LIST_SUCCESS:
      return {
        ...state,
        questionList: action.questionList,
        questionListError: null,
      };
    case QUESTION_LIST_FAILURE:
      return {
        ...state,
        questionList: null,
        questionListError: action.questionListError,
      };
    case QUESTION_DELETE:
      return {
        ...state,
        questionListDelete: null,
        questionListDeleteError: null,
      };
    case QUESTION_DELETE_SUCCESS:
      return {
        ...state,
        questionListDelete: action.questionDelete,
        questionListDeleteError: null,
      };
    case QUESTION_DELETE_FAILURE:
      return {
        ...state,
        questionListDelete: null,
        questionListDeleteError: action.questionDeleteError,
      };
    case DETAIL_LIST:
      return {
        isDetail: 'list',
      };
    case DETAIL_UPDATE:
      return {
        isUpdate: 'update',
      };
    default:
      return state;
  }
}

export default question;
