import axios from 'axios';

export const questionAdd = async ({ title, contents, category, token }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/user/question/add`,
    {
      title,
      contents,
      category,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  console.log('데이터', response.data.data);
  return response.data.data;
};

export const questionUpdate = async ({
  questionId,
  title,
  contents,
  token,
}) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/user/question/update`,
    { questionId, title, contents, token },
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  console.log('뭐니', response.data);
  return response.data;
};

export const questionList = async ({ token }) => {
  console.log('TOKEN>>>', token);
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/user/question/questionlist`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  return response.data;
};

export const questionDelete = async ({ token, questionId }) => {
  console.log('토큰?', token);
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/user/question/delete`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: { questionId },
      withCredentials: true,
    },
  );
  console.log('delete 요청 확인', response.data);
  return response.data;
};

export const questionReply = async ({
  token,
  questionId,
  replytext,
  replyCheck,
}) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/user/question/addreply`,
    {
      questionId,
      replytext,
      replyCheck,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  console.log('reply 요청 확인', response.data);
  return response.data;
};

export const questionReplyUpdate = async ({
  token,
  questionId,
  replytext,
  replyCheck,
}) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/user/question/updatereply`,
    {
      questionId,
      replytext,
      replyCheck,
    },
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  console.log('replyUpdate 요청 확인', response.data);
  return response.data;
};
