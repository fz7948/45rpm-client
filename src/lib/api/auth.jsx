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
