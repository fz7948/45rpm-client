import axios from 'axios';

export const customAdd = async (token, formData) => {
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
  return response.data;
};
