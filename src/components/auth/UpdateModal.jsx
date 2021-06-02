import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ModalBack, ModalBox } from '../common/ModalStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateReq, resetUpdate } from '../../modules/auth';
import { withdrawal } from '../../modules/user';
import { alertUpdateModal, alertWithdrawalModal } from '../../modules/modal';
import { GrFormClose } from 'react-icons/gr';

const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  ul {
    padding: 0;
  }
  li {
    position: relative;
    list-style: none;
    margin-bottom: 1rem;
  }
  p {
    font-size: 15px;
    font-weight: 600;
    color: #707174;
    margin: 0;
    margin-bottom: 5px;
  }
  .update_info {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }
  .deny-message {
    width: 280px;
    height: 12px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    color: #f73d5c;
    word-break: keep-all;
  }
`;

const UpdateLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #707174;
  div {
    margin-bottom: 8px;
  }
`;

const UpdateInput = styled.input`
  height: 1.6rem;
  width: 21rem;
  padding: 1.4rem;

  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 15.5px;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #313899;
    transition: all ease 0.3s;
  }
`;

const UpdateCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: 1rem;
  left: 20rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.4rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
`;

const UpdateSubmitBtn = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 21rem;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin-bottom: 0.7rem;
  background-color: #311788;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  &:hover {
    background-color: #03154e;
    transition: all ease 0.3s;
  }
`;

const WithdrawBtn = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
  margin-top: 5px;
  button {
    border: 0;
    cursor: pointer;
    font-size: 1.25rem;
    background: white;
    padding: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const UpdateModal = ({ open, close, history, userId, userEmail, username }) => {
  const dispatch = useDispatch();
  const { update, updateError, token } = useSelector(({ auth, user }) => ({
    update: auth.update,
    updateError: auth.updateError,
    token: user.token,
  }));

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);

  const refEmail = useRef(null);
  const refUsername = useRef(null);
  const refOldPassword = useRef(null);
  const refNewPassword = useRef(null);
  const refNewPasswordCheck = useRef(null);

  const [inputID, setInputID] = useState(userId);
  const [inputEmail, setInputEmail] = useState(userEmail);
  const [inputUsername, setInputUsername] = useState(username);
  const [inputOldPassword, setInputOldPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputNewPasswordCheck, setInputNewPasswordCheck] = useState('');
  const [denyMessage, setDenyMessage] = useState('');

  useEffect(() => {
    if (updateError) {
      if (updateError === 'Wrong password') {
        setDenyMessage('기존 비밀번호를 확인해주세요.');
        refOldPassword.current.focus();
      }
      if (updateError === 'This is your Origin Email') {
        setDenyMessage('이메일이 기존 이메일과 같습니다.');
        refEmail.current.focus();
      }
      if (updateError === 'This Email is already used') {
        setDenyMessage('이미 사용중인 이메일입니다.');
        refEmail.current.focus();
      }
      if (updateError === 'You already use this password') {
        setDenyMessage('새 비밀번호가 현재 비밀번호와 같습니다.');
        refNewPassword.current.focus();
      }
      return;
    }
    if (update) {
      dispatch(resetUpdate());
      dispatch(alertUpdateModal());
      handleCloseModal();
      history.push('/');
    }
  }, [update, updateError]);

  useEffect(() => {
    refEmail.current.focus();
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handleCloseBtn();
      }
    });
  }, [open]);

  const handleMoveToUsername = (e) => {
    if (e.key === 'Enter') {
      refUsername.current.focus();
    }
  };

  const handleMoveToOldpassword = (e) => {
    if (e.key === 'Enter') {
      refOldPassword.current.focus();
    }
  };

  const handleMoveToNewpassword = (e) => {
    if (e.key === 'Enter') {
      refNewPassword.current.focus();
    }
  };

  const handleMoveToNewpasswordCheck = (e) => {
    if (e.key === 'Enter') {
      refNewPasswordCheck.current.focus();
    }
  };

  const handleMoveToSignUp = (e) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  const handleCloseBtn = () => {
    setInputID('');
    setInputEmail('');
    setInputUsername('');
    setInputOldPassword('');
    setInputNewPassword('');
    setInputNewPasswordCheck('');
    setDenyMessage('');
    close();
  };

  const handleCloseModal = () => {
    setInputID('');
    setInputEmail('');
    setInputUsername('');
    setInputOldPassword('');
    setInputNewPassword('');
    setInputNewPasswordCheck('');
    setDenyMessage('');
  };

  const handleChangeID = useCallback((e) => {
    setInputID(userId);
  }, []);

  const handleChangeEmail = useCallback(
    (e) => {
      setInputEmail(e.target.value);
    },
    [inputEmail],
  );

  const handleChangeUsername = useCallback(
    (e) => {
      setInputUsername(e.target.value);
    },
    [inputUsername],
  );

  const handleChangeOldPassword = useCallback(
    (e) => {
      setInputOldPassword(e.target.value);
    },
    [inputOldPassword],
  );

  const handleChangeNewPassword = useCallback(
    (e) => {
      setInputNewPassword(e.target.value);
    },
    [inputNewPassword],
  );

  const handleChangeNewPasswordCheck = useCallback(
    (e) => {
      setInputNewPasswordCheck(e.target.value);
    },
    [inputNewPasswordCheck],
  );

  const checkValidEmail = useCallback(
    (email) => {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          email,
        )
      ) {
        return true;
      }
      setDenyMessage('유효하지 않은 이메일입니다.');
      return false;
    },
    [inputEmail, denyMessage],
  );

  const checkValidPassword = useCallback(
    (password) => {
      if (password === '') {
        return true;
      }
      if (!/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/.test(password)) {
        setDenyMessage(
          '영문자 + 숫자/특수문자 조합으로 8~20자리를 사용해야 합니다.',
        );
        return false;
      }
      const check_num = password.search(/[0-9]/g);
      const check_eng = password.search(/[a-z]/gi);
      if (check_num < 0 || check_eng < 0) {
        setDenyMessage('비밀번호는 숫자와 영문자를 혼용하여야 합니다.');
        return false;
      }
      if (/(\w)\1\1\1/.test(password)) {
        setDenyMessage('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.');
        return false;
      }
      return true;
    },
    [inputNewPassword, denyMessage],
  );

  const handleCheckForm = () => {
    if (inputEmail === '') {
      refEmail.current.focus();
      setDenyMessage('E-mail을 입력하세요');
      return false;
    } else if (!checkValidEmail(inputEmail)) {
      refEmail.current.focus();
      return false;
    }
    if (inputUsername === '') {
      refUsername.current.focus();
      setDenyMessage('닉네임을 입력하세요');
      return false;
    }
    if (!checkValidPassword(inputNewPassword)) {
      refNewPassword.current.focus();
      return false;
    }
    if (inputNewPassword !== inputNewPasswordCheck) {
      refNewPasswordCheck.current.focus();
      setDenyMessage('비밀번호와 일치하지 않습니다');
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  if (!animate && !localVisible) return null;

  const handleSignup = () => {
    if (handleCheckForm()) {
      dispatch(
        updateReq(
          inputEmail,
          inputUsername,
          inputOldPassword,
          inputNewPassword,
          token,
        ),
      );
    }
  };

  const withdrawalBtn = () => {
    dispatch(withdrawal(token));
    dispatch(alertWithdrawalModal());
    history.push('/');
  };

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={close}></div>
        <ModalBox disappear={!open} update>
          <UpdateCloseBtn onClick={close}>
            <GrFormClose />
          </UpdateCloseBtn>
          <UpdateWrapper>
            <h2>계정 정보 수정</h2>
            <div className="update_info">
              <p>ID는 변경이 불가능합니다.</p>
              <p>E-mail, 이름을 입력하지 않을 시, 유지됩니다.</p>
            </div>
            <ul>
              <li>
                <UpdateLabel>
                  <div>ID</div>
                </UpdateLabel>
                <UpdateInput
                  type="text"
                  value={inputID}
                  onChange={handleChangeID}
                  readonly
                />
              </li>
              <li>
                <UpdateLabel>
                  <div>E - mail</div>
                </UpdateLabel>
                <UpdateInput
                  type="text"
                  value={inputEmail}
                  onChange={handleChangeEmail}
                  onKeyPress={handleMoveToUsername}
                  ref={refEmail}
                />
              </li>
              <li>
                <UpdateLabel>
                  <div>이름</div>
                </UpdateLabel>
                <UpdateInput
                  type="text"
                  value={inputUsername}
                  onChange={handleChangeUsername}
                  onKeyPress={handleMoveToOldpassword}
                  ref={refUsername}
                />
              </li>
              <li>
                <UpdateLabel>
                  <div>현재 비밀번호</div>
                </UpdateLabel>
                <UpdateInput
                  type="password"
                  value={inputOldPassword}
                  placeholder="Password"
                  onChange={handleChangeOldPassword}
                  onKeyPress={handleMoveToNewpassword}
                  ref={refOldPassword}
                />
              </li>
              <li>
                <UpdateLabel>
                  <div>새 비밀번호</div>
                </UpdateLabel>
                <UpdateInput
                  type="password"
                  value={inputNewPassword}
                  placeholder="입력하지 않을 시, 기존 비밀번호 유지"
                  onChange={handleChangeNewPassword}
                  onKeyPress={handleMoveToNewpasswordCheck}
                  ref={refNewPassword}
                />
              </li>
              <li>
                <UpdateLabel>
                  <div>새 비밀번호 확인</div>
                </UpdateLabel>
                <UpdateInput
                  type="password"
                  value={inputNewPasswordCheck}
                  placeholder="입력하지 않을 시, 기존 비밀번호 유지"
                  onChange={handleChangeNewPasswordCheck}
                  onKeyPress={handleMoveToSignUp}
                  ref={refNewPasswordCheck}
                />
              </li>
            </ul>
            <p className="deny-message">{denyMessage}</p>
            <UpdateSubmitBtn onClick={handleSignup}>수정 완료</UpdateSubmitBtn>
            <WithdrawBtn>
              <button onClick={() => withdrawalBtn()}>탈퇴하기</button>
            </WithdrawBtn>
          </UpdateWrapper>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default withRouter(UpdateModal);
