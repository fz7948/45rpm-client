import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ModalBack, ModalBox } from '../../common/Modal/ModalStyle';
import { loginReq, resetLoginMsg } from '../../../modules/auth';
import { loginUser, checkUser } from '../../../modules/user';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { alertLoginModal } from '../../../modules/modal';
import { GrFormClose } from 'react-icons/gr';
import {
  LoginCloseBtn,
  LoginWrapper,
  LoginInput,
  LoginLabel,
  LoginSocialBtn,
  LoginSubmitBtn,
} from './styles';

const LoginModal = ({
  open,
  close,
  history,
  kakaoLoginHandler,
  googleLoginHandler,
}) => {
  const dispatch = useDispatch();
  const { login, loginError } = useSelector(({ auth }) => ({
    login: auth.login,
    loginError: auth.loginError,
  }));

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);

  const refID = useRef(null);
  const refPassword = useRef(null);

  const [inputID, setInputID] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [denyMessage, setDenyMessage] = useState('');

  useEffect(() => {
    if (loginError) {
      if (loginError === 'There is no user information') {
        refID.current.focus();
        setDenyMessage('해당 유저가 존재하지 않습니다.');
        return;
      }
      if (loginError === 'You wrote wrong password') {
        refPassword.current.focus();
        setDenyMessage('비밀번호를 확인해주세요.');
        return;
      }
    }
    if (login) {
      const token = document.cookie.split('=')[1];
      const payload = {
        id: login.data.id,
        email: login.data.email,
        username: login.data.username,
        token: token,
      };
      try {
        sessionStorage.setItem('id', payload.id);
      } catch (e) {
        console.log('sessionStorage is not working');
      }
      dispatch(loginUser(payload));
      dispatch(checkUser(payload.id, payload.token));
      history.push('/');
      dispatch(alertLoginModal());
      handleCloseModal();
    }
  }, [login, loginError, dispatch]);

  useEffect(() => {
    refID.current.focus();
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handleCloseBtn();
      }
    });
  }, [open]);

  const handleMoveToPassword = (e) => {
    if (e.key === 'Enter') {
      refPassword.current.focus();
    }
  };

  const handleMoveToSignIn = (e) => {
    if (e.key === 'Enter') {
      handleSignIn();
    }
  };

  const handleCloseBtn = () => {
    setInputID('');
    setInputPassword('');
    setDenyMessage('');
    dispatch(resetLoginMsg());
    close();
  };

  const handleCloseModal = () => {
    setInputID('');
    setInputPassword('');
    setDenyMessage('');
    dispatch(resetLoginMsg());
  };

  const handleInputID = useCallback(
    (e) => {
      setInputID(e.target.value);
    },
    [inputID],
  );

  const handleInputPassword = useCallback(
    (e) => {
      setInputPassword(e.target.value);
    },
    [inputPassword],
  );

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  if (!animate && !localVisible) return null;

  const handleSignIn = () => {
    dispatch(resetLoginMsg());
    if (inputID === '') {
      refID.current?.focus();
      setDenyMessage('ID를 입력하세요');
      return;
    }
    if (inputPassword === '') {
      refPassword.current?.focus();
      setDenyMessage('비밀번호를 입력하세요');
      return;
    }
    dispatch(loginReq(inputID, inputPassword));
  };

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={(close, handleCloseBtn)}></div>
        <ModalBox disappear={!open}>
          <LoginCloseBtn onClick={(close, handleCloseBtn)}>
            <GrFormClose />
          </LoginCloseBtn>
          <LoginWrapper>
            <h2> 로그인 </h2>
            <ul>
              <li>
                <LoginLabel>
                  <div> ID </div>
                </LoginLabel>
                <LoginInput
                  type="text"
                  value={inputID}
                  onChange={handleInputID}
                  placeholder="ID를 입력해주세요"
                  onKeyPress={handleMoveToPassword}
                  ref={refID}
                />
              </li>
              <li>
                <LoginLabel>
                  <div> 비밀번호 </div>
                </LoginLabel>
                <LoginInput
                  type="password"
                  value={inputPassword}
                  onChange={handleInputPassword}
                  placeholder="Password"
                  onKeyPress={handleMoveToSignIn}
                  ref={refPassword}
                />
              </li>
            </ul>
            <p className="deny-message"> {denyMessage} </p>
            <LoginSubmitBtn onClick={handleSignIn}> 로그인 </LoginSubmitBtn>
            <div id="gSignInWrapper" onClick={googleLoginHandler}>
              <div id="customBtn" class="customGPlusSignIn">
                <span class="icon">
                  <img src="./images/google-logo.png" alt="" />
                </span>
                <span class="buttonText">Login with Google</span>
              </div>
            </div>
            <LoginSocialBtn onClick={kakaoLoginHandler}>
              <img
                className="kakao"
                src="/images/kakao_login_large_wide.png"
                alt=""
              ></img>
            </LoginSocialBtn>
          </LoginWrapper>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default withRouter(LoginModal);
