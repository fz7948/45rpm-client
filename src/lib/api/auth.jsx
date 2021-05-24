import axios from 'axios';

export const signup = async ({ id, email, username, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/user/signup`,
    {
      id,
      email,
      username,
      password,
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const login = async ({ id, password }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/user/login`,
    { id, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const update = async ({
  email,
  username,
  oldpassword,
  newpassword,
  token,
}) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URI}/user/updateinfo`,
    { email, username, oldpassword, newpassword },
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

export const logout = async (token) => {
  console.log('이건?', token);
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/user/logout`,
    {},
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    },
  );
  console.log('되지?');
  return response;
};

export const withdraw = async (token) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_SERVER_URI}/user/withdrawal`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  console.log('탈퇴완료?', response.data);
  return response.data;
};

export const info = async (token) => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URI}/user/getuserinfo`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    },
    { withCredentials: true },
  );
  console.log('유저정보', response.data);
  return response.data;
};
