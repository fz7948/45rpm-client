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

const QUESTION_REPLY = 'QUESTION_REPLY';
const QUESTION_REPLY_SUCCESS = 'QUESTION_REPLY_SUCCESS';
const QUESTION_REPLY_FAILURE = 'QUESTION_REPLY_FAILURE';

const QUESTION_REPLY_UPDATE = 'QUESTION_REPLY_UPDATE';
const QUESTION_REPLY_UPDATE_SUCCESS = 'QUESTION_REPLY_UPDATE_SUCCESS';
const QUESTION_REPLY_UPDATE_FAILURE = 'QUESTION_REPLY_UPDATE_FAILURE';

const DETAIL_UPDATE = 'DETAIL_UPDATE';
const DETAIL_LIST = 'DETAIL_LIST';

export const questionAddReq =
  (title, contents, category, token) => async (dispatch) => {
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

export const questionUpdateReq =
  (questionId, title, contents, token) => async (dispatch) => {
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
  dispatch({ type: QUESTION_LIST });

  try {
    const questionListRes = await questionAPI.questionList({ token });
    dispatch({
      type: QUESTION_LIST_SUCCESS,
      questionList: questionListRes,
    });
  } catch (error) {
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
    dispatch({
      type: QUESTION_DELETE_FAILURE,
      questionDeleteError: error,
    });
  }
};

export const questionReplyReq =
  (token, questionId, replytext, replyCheck) => async (dispatch) => {
    dispatch({ type: QUESTION_REPLY_UPDATE });
    try {
      const questionReplyRes = await questionAPI.questionReply({
        token,
        questionId,
        replytext,
        replyCheck,
      });
      dispatch({
        type: QUESTION_REPLY_SUCCESS,
        questionReply: questionReplyRes,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_REPLY_FAILURE,
        questionReplyError: error,
      });
    }
  };

export const questionReplyUpdateReq =
  (token, questionId, replytext, replyCheck) => async (dispatch) => {
    dispatch({ type: QUESTION_REPLY_UPDATE });
    try {
      const questionReplyUpdateRes = await questionAPI.questionReplyUpdate({
        token,
        questionId,
        replytext,
        replyCheck,
      });
      dispatch({
        type: QUESTION_REPLY_UPDATE_SUCCESS,
        questionReplyUpdate: questionReplyUpdateRes,
      });
    } catch (error) {
      dispatch({
        type: QUESTION_REPLY_UPDATE_FAILURE,
        questionReplyUpdateError: error,
      });
    }
  };

export const detailListReq = () => ({ type: DETAIL_LIST });
export const detailUpdateReq = () => ({ type: DETAIL_UPDATE });

export const resetAddQuestion = () => ({ type: QUESTION_ADD });
export const resetUpdateQuestion = () => ({ type: QUESTION_UPDATE });
export const resetListQuestion = () => ({ type: QUESTION_LIST });

export const resetReplyQuestion = () => ({ type: QUESTION_REPLY });
export const resetReplyQuestionUpdate = () => ({ type: QUESTION_REPLY_UPDATE });

const initialState = {
  questionList: null,
  questionListError: null,
  questionListDelete: null,
  questionListDeleteError: null,
  questionAdd: null,
  questionAddError: null,
  questionUpdate: null,
  questionUpdateError: null,
  questionReply: null,
  questionReplyError: null,
  questionReplyUpdate: null,
  questionReplyUpdateError: null,
  isDetail: null,
  replyCheck: false,
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
    case QUESTION_REPLY:
      return {
        ...state,
        questionReply: null,
        questionReplyError: null,
      };
    case QUESTION_REPLY_SUCCESS:
      return {
        ...state,
        questionReply: action.questionReply,
        questionReplyError: null,
      };
    case QUESTION_REPLY_FAILURE:
      return {
        ...state,
        questionReply: null,
        questionReplyError: action.questionReplyError,
      };
    case QUESTION_REPLY_UPDATE:
      return {
        ...state,
        questionReplyUpdate: null,
        questionReplyUpdateError: null,
      };
    case QUESTION_REPLY_UPDATE_SUCCESS:
      return {
        ...state,
        questionReplyUpdate: action.questionReplyUpdate,
        questionReplyUpdateError: null,
      };
    case QUESTION_REPLY_UPDATE_FAILURE:
      return {
        ...state,
        questionReplyUpdate: null,
        questionReplyUpdateError: action.questionReplyUpdateError,
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
