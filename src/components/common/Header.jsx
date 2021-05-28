import React, { useEffect, useState } from 'react';
import { loginKakao } from '../../modules/user';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const { checkModal, isType, login, alertCheck, token, isLogin, isSocial } =
    useSelector(({ modal, auth, user }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      login: auth.login,
      alertCheck: modal.alertCheck,
      token: user.token,
      isLogin: user.isLogin,
      isSocial: auth.isSocial,
    }));

  useEffect(async () => {
    if (login) {
      console.log('돌아간다');
      const cookie = document.cookie.split('=')[1];

      const payload = {
        id: login.data.id,
        email: login.data.email,
        username: login.data.username,
        token: cookie,
      };
      console.log(isSocial);
      if (isSocial === 'kakao') {
        console.log('카카오들어옴?');
        dispatch(loginKakao(payload));
        dispatch(alertOpenModal());
      }
    }
  }, [login]);

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
                dispatch(kakaoLoginReq(response));
                // console.log(response);
                // setTimeout(() => {
                //   const cookie = document.cookie.split('=')[1];
                //   const payload = {
                //     id: response.kakao_account.email.split('@')[0],
                //     email: response.kakao_account.email,
                //     username: response.kakao_account.email.split('@')[0],
                //     token: cookie,
                //   };
                //   console.log(payload);
                //   return dispatch(loginKakao(payload)), 1000;
                // });
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
