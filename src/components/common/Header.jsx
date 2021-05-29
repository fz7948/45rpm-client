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

  const googleLoginHandler = async () => {
    try {
      //방법1
      // const clientId =
      //   '889468857969-68v5gvrru6phi5i8454cv48t34k458oj.apps.googleusercontent.com';
      // const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=http://localhost:3000&response_type=code&scope=email+profile&access_type=offline`;
      // window.location.href = url;

      //방법 2
      console.log('1');
      const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
      console.log('2');
      // Create <form> element to submit parameters to OAuth 2.0 endpoint.
      const form = document.createElement('form');
      form.setAttribute('method', 'GET'); // Send as a GET request.
      form.setAttribute('action', oauth2Endpoint);
      console.log('3');
      // Parameters to pass to OAuth 2.0 endpoint.
      const params = {
        client_id: '889468857969-68v5gvrru6phi5i8454cv48t34k458oj',
        redirect_uri: 'http://localhost:3000',
        response_type: 'token',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
        include_granted_scopes: 'true',
        state: 'pass-through value',
      };
      console.log('4');

      // const googleTokenHandler = async () => {
      //   if (window.location.hash !== '') {
      //     console.log('7');
      //     const googleData = await decodeURIComponent(
      //       window.location.hash,
      //     ).split('&');
      //     console.log('8');
      //     console.log('구글구글', googleData);
      //   }
      // };
      // Add form parameters as hidden input values.
      for (var p in params) {
        var input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', params[p]);
        form.appendChild(input);
      }
      console.log('5');
      // Add form to page and submit it to open the OAuth 2.0 endpoint.
      document.body.appendChild(form);
      form.submit();
      // .then(() => {
      //   googleTokenHandler();
      // });
      console.log('6');
      //리다이렉트 된 후 useEffect써서 함수 실행 돌리기
      //여기서 다시 돌리자
      // useEffect(() => {
      //   if (window.location.hash !== '') {
      //     const googleData = decodeURIComponent(window.location.hash).split(
      //       '&',
      //     );
      //     console.log('구글구글', googleData);
      //   }
      // });
      // if (window.location.hash !== '') {
      //   console.log('7');
      //   const googleData = await decodeURIComponent(window.location.hash).split(
      //     '&',
      //   );
      //   console.log('8');
      //   console.log('구글구글', googleData);
      //   sessionStorage.setItem('gooooogle', googleData);
      //   console.log('9');
      //   let newHashData = '';
      //   for (const el of googleData) {
      //     const parsedData = el.split('=');
      //     if (
      //       (parsedData[0] === '#state' || parsedData[0] === 'state') &&
      //       parsedData[1].indexOf('signup') > -1
      //     ) {
      //       newHashData += `${parsedData[0]}`;
      //     } else newHashData += el + '&';
      //   }
      //   console.log('10');
      //   console.log('정제된 구글', newHashData);
      //   sessionStorage.setItem('new google', newHashData);
      // }
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
            googleLoginHandler={googleLoginHandler}
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
