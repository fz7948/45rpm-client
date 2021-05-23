const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = ({ id, email, username }) => ({
  type: LOGIN_USER,
  id,
  email,
  username,
});

const initialState = {
  isLogin: false,
  id: null,
  email: null,
  username: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLogin: true,
        id: action.id,
        email: action.email,
        username: action.username,
      };
    default:
      return state;
  }
}
