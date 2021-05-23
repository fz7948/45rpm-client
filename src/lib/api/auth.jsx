import axios from 'axios';

export const signup = async ({ id, email, username, password }) => {
  const response = await axios.post(
    `http://localhost:4000/user/signup`,
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
    `http://localhost:4000/user/login`,
    { id, password },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  return response.data;
};

export const update = async ({ email, username, oldpassword, newpassword }) => {
  const response = await axios.patch(
    `http://localhost:4000/user/updateinfo`,
    { email, username, oldpassword, newpassword },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    },
  );
  console.log('토큰??', response.data);
  return response.data;
};
