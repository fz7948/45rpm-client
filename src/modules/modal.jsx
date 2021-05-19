const SHOW_MODAL = 'SHOW_MODAL';
const LOGIN_MODAL = 'LOGIN_MODAL';
const REGISTER_MODAL = 'REGISTER_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const showModal = () => ({ type: SHOW_MODAL });
export const loginModal = () => ({ type: LOGIN_MODAL });
export const registerModal = () => ({ type: REGISTER_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });

const initialState = {
  checkModal: false,
  isType: null,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        checkModal: true,
        isType: null,
      };
    case LOGIN_MODAL:
      return {
        checkModal: true,
        isType: 'login',
      };
    case REGISTER_MODAL:
      return {
        checkModal: true,
        isType: 'register',
      };
    case CLOSE_MODAL:
      return {
        checkModal: false,
        isType: null,
      };
    default:
      return state;
  }
}
