import axios from 'axios';

export const signup = async ({ id, email, username, password }) => {
  console.log('이건?', id, password, email, username);
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
  console.log('잘뜨냐', response);
  return response.data;
};
