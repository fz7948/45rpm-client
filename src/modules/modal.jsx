const SHOW_MODAL = 'SHOW_MODAL';
const LOGIN_MODAL = 'LOGIN_MODAL';
const REGISTER_MODAL = 'REGISTER_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const ALBUM_DETAIL_MODAL = 'ALBUM_DETAIL_MODAL';
const INFO_MODAL = 'INFO_MODAL';
const INQUIRY_MODAL = 'INQUIRY_MODAL';

const ALERT_MODAL_SUCCESS = 'ALERT_MODAL_SUCCESS';
const ALERT_MODAL_FAILURE = 'ALERT_MODAL_FAILURE';
const ALERT_MODAL_LOGIN = 'ALERT_MODAL_LOGIN';
const ALERT_MODAL_REGISTER = 'ALERT_MODAL_REGISTER';
const ALERT_MODAL_LOGOUT = 'ALERT_MODAL_LOGOUT';
const ALERT_MODAL_UPDATE = 'ALERT_MODAL_UPDATE';
const ALERT_MODAL_WITHDRAWAL = 'ALERT_MODAL_WITHDRAWAL';

export const showModal = () => ({ type: SHOW_MODAL });
export const loginModal = () => ({ type: LOGIN_MODAL });
export const registerModal = () => ({ type: REGISTER_MODAL });
export const albumDetailModal = () => ({ type: ALBUM_DETAIL_MODAL });
export const infoModal = () => ({ type: INFO_MODAL });
export const inquiryModal = () => ({ type: INQUIRY_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });

export const alertOpenModal = () => ({ type: ALERT_MODAL_SUCCESS });
export const alertCloseModal = () => ({ type: ALERT_MODAL_FAILURE });
export const alertLoginModal = () => ({ type: ALERT_MODAL_LOGIN });
export const alertRegisterModal = () => ({ type: ALERT_MODAL_REGISTER });
export const alertLogoutModal = () => ({ type: ALERT_MODAL_LOGOUT });
export const alertUpdateModal = () => ({ type: ALERT_MODAL_UPDATE });
export const alertWithdrawalModal = () => ({ type: ALERT_MODAL_WITHDRAWAL });

const initialState = {
  checkModal: false,
  isType: null,
  alertCheck: false,
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
    case ALBUM_DETAIL_MODAL:
      return {
        checkModal: true,
        isType: 'detail',
      };
    case INFO_MODAL:
      return {
        checkModal: true,
        isType: 'info',
      };
    case INQUIRY_MODAL:
      return {
        checkModal: true,
        isType: 'inquiry',
      };
    case CLOSE_MODAL:
      return {
        checkModal: false,
        alertCheck: false,
        isType: null,
      };
    case ALERT_MODAL_SUCCESS:
      return {
        checkModal: false,
        alertCheck: true,
        isType: 'alert',
      };
    case ALERT_MODAL_LOGIN:
      return {
        checkModal: false,
        alertCheck: true,
        isType: 'alertLogin',
      };
    case ALERT_MODAL_REGISTER:
      return {
        checkModal: false,
        alertCheck: true,
        isType: 'alertRegister',
      };
    case ALERT_MODAL_LOGOUT:
      return {
        checkModal: false,
        alertCheck: true,
        isType: 'alertLogout',
      };
    case ALERT_MODAL_UPDATE:
      return {
        checkModal: false,
        alertCheck: true,
        isType: 'alertUpdate',
      };
    case ALERT_MODAL_WITHDRAWAL:
      return {
        checkModal: false,
        alertCheck: true,
        isType: 'alertWithdrawal',
      };
    case ALERT_MODAL_FAILURE:
      return {
        checkModal: false,
        alertCheck: false,
      };
    default:
      return state;
  }
}
