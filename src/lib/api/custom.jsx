import axios from 'axios';

export const customAdd = async (token, formData) => {
  console.log('custom add 토큰', token);
  console.log('custom add 토큰 토큰', token.token);
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URI}/customs/add-custom`,
    { formData },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token.token}`,
      },
      withCredentials: true,
    },
  );
  console.log('커스텀 add axios', response.data);
  return response.data;
};
