import React, { useEffect, useState } from 'react';
import '../../pages/sass/Header.scss';
import {
  loginModal,
  registerModal,
  closeModal,
  alertOpenModal,
} from '../../modules/modal';
import { resetLogin, resetLoginMsg, kakaoLoginReq } from '../../modules/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginModal from '../../components/auth/LoginModal';
import RegisterModal from '../../components/auth/RegisterModal';

const Header = () => {
  const { checkModal, isType, login, alertCheck } = useSelector(
    ({ modal, auth }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      login: auth.login,
      alertCheck: modal.alertCheck,
    }),
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(loginModal());
  };

  const openRegisterModal = () => {
    dispatch(registerModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  const kakaoLoginHandler = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!window.Kakao) {
          reject('Kakao 인스턴스가 존재하지 않습니다.');
        }
        window.Kakao.Auth.login({
          success: (auth) => {
            window.Kakao.API.request({
              url: '/v2/user/me',
              data: {
                property_keys: [
                  'kakao_account.email',
                  'kakao_account.profile.nickname',
                  'kakao_account.profile.profile_image_url',
                  'kakao_account.profile.thumbnail_image_url',
                ],
              },
              success: function (response) {
                dispatch(kakaoLoginReq(response)).then(() => {
                  history.push('/');
                  dispatch(resetLogin());
                  dispatch(resetLoginMsg());
                  dispatch(alertOpenModal());
                });
              },
              fail: function (error) {
                console.log(error);
              },
            });
          },
          fail: (err) => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo" onClick={() => history.push('/')}>
          45RPM
        </div>
        <div className="buttonWrapper">
          <div className="signIn" onClick={openLoginModal}>
            로그인
          </div>
          <div className="signUp" onClick={openRegisterModal}>
            회원가입
          </div>
        </div>
        {isType === 'login' && (
          <LoginModal
            open={checkModal}
            close={shutModal}
            kakaoLoginHandler={kakaoLoginHandler}
          ></LoginModal>
        )}
        {isType === 'register' && (
          <RegisterModal open={checkModal} close={shutModal}></RegisterModal>
        )}
      </header>
    </>
  );
};

export default Header;
