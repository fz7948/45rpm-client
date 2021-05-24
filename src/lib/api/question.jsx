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
  console.log('보냈냐', response.data);
  return response.data;
};

export const questionUpdate = async ({}) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/user/question/update`,
    {},
    {
      headers: {
        // authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  return response.data;
};
