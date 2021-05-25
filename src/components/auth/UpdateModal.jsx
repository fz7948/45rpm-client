import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ModalBack, ModalBox } from '../common/ModalStyle';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateReq, resetUpdate } from '../../modules/auth';
import { withdrawal } from '../../modules/user';

const UpdateWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
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
    font-size: 12px;
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
    width: 220px;
    height: 12px;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: #f73d5c;
    word-break: keep-all;
  }
`;

const UpdateLabel = styled.label `
  font-size: 12px;
  font-weight: 600;
  color: #707174;
  div {
    margin-bottom: 3px;
  }
`;

const UpdateInput = styled.input `
  height: 1rem;
  width: 16rem;
  padding: 1rem;

  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 12px;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #313899;
    transition: all ease 0.3s;
  }
`;

const UpdateCloseBtn = styled.button `
  cursor: pointer;
  position: relative;
  top: 1rem;
  left: 14.3rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
`;

const UpdateSubmitBtn = styled.button `
  cursor: pointer;
  height: 2.2rem;
  width: 16rem;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin-bottom: 0.7rem;
  background-color: #311788;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 400;
  &:hover {
    background-color: #03154e;
    transition: all ease 0.3s;
  }
`;

const WithdrawBtn = styled.div `
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 10px;
  button {
    border: 0;
    cursor: pointer;
    font-size: 0.9rem;
    background: white;
    padding: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const UpdateModal = ({ open, close, history }) => {
    const dispatch = useDispatch();
    const { update, updateError, token, info } = useSelector(
        ({ auth, user }) => ({
            update: auth.update,
            updateError: auth.updateError,
            token: user.token,
        }),
    );

    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(open);

    const refID = useRef(null);
    const refEmail = useRef(null);
    const refUsername = useRef(null);
    const refOldPassword = useRef(null);
    const refNewPassword = useRef(null);
    const refNewPasswordCheck = useRef(null);

    const [inputID, setInputID] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [inputOldPassword, setInputOldPassword] = useState('');
    const [inputNewPassword, setInputNewPassword] = useState('');
    const [inputNewPasswordCheck, setInputNewPasswordCheck] = useState('');
    const [denyMessage, setDenyMessage] = useState('');

    useEffect(() => {
        if (updateError) {
            if (updateError === '') {
                setDenyMessage(updateError);
            }
            return;
        }
        if (update) {
            alert(update.message);
            dispatch(resetUpdate());
            handleCloseBtn();
            //모달로 만들어야함
        }
    }, [update, updateError]);

    useEffect(() => {
        refID.current.focus();
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                handleCloseBtn();
            }
        });
    }, [open]);

    const handleMoveToEmail = (e) => {
        if (e.key === 'Enter') {
            refEmail.current.focus();
        }
    };

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

    const handleChangeID = useCallback(
        (e) => {
            setInputID(e.target.value);
        }, [inputID],
    );

    const handleChangeEmail = useCallback(
        (e) => {
            setInputEmail(e.target.value);
        }, [inputEmail],
    );

    const handleChangeUsername = useCallback(
        (e) => {
            setInputUsername(e.target.value);
        }, [inputUsername],
    );

    const handleChangeOldPassword = useCallback(
        (e) => {
            setInputOldPassword(e.target.value);
        }, [inputOldPassword],
    );

    const handleChangeNewPassword = useCallback(
        (e) => {
            setInputNewPassword(e.target.value);
        }, [inputNewPassword],
    );

    const handleChangeNewPasswordCheck = useCallback(
        (e) => {
            setInputNewPasswordCheck(e.target.value);
        }, [inputNewPasswordCheck],
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
        }, [inputEmail, denyMessage],
    );

    const checkValidPassword = useCallback(
        (password) => {
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
        }, [inputNewPassword, denyMessage],
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
        alert('탈퇴할거니');
        dispatch(withdrawal(token));
        history.push('/');
    };

    return ( <
        >
        <
        ModalBack disappear = {!open } >
        <
        div className = "modal_outsider"
        onClick = { close } > { ' ' } <
        /div>{' '} <
        ModalBox disappear = {!open }
        update >
        <
        UpdateCloseBtn onClick = { close } > X < /UpdateCloseBtn>{' '} <
        UpdateWrapper >
        <
        h2 > 계정 정보 수정 < /h2>{' '} <
        div className = "update_info" >
        <
        p > E - mail은 변경이 불가능합니다. < /p>{' '} <
        p > 닉네임을 입력하지 않을 시, 유지됩니다. < /p>{' '} <
        /div>{' '} <
        ul >
        <
        li >
        <
        UpdateLabel >
        <
        div > ID < /div>{' '} <
        /UpdateLabel>{' '} <
        UpdateInput type = "text"
        value = { inputID }
        placeholder = "id"
        onChange = { handleChangeID }
        onKeyPress = { handleMoveToEmail }
        ref = { refID }
        />{' '} <
        /li>{' '} <
        li >
        <
        UpdateLabel >
        <
        div > E - mail < /div>{' '} <
        /UpdateLabel>{' '} <
        UpdateInput type = "text"
        value = { inputEmail }
        placeholder = "fz7948@gmail.com"
        onChange = { handleChangeEmail }
        onKeyPress = { handleMoveToUsername }
        ref = { refEmail }
        />{' '} <
        /li>{' '} <
        li >
        <
        UpdateLabel >
        <
        div > 이름 < /div>{' '} <
        /UpdateLabel>{' '} <
        UpdateInput type = "text"
        value = { inputUsername }
        placeholder = "이름을 입력해주세요."
        onChange = { handleChangeUsername }
        onKeyPress = { handleMoveToOldpassword }
        ref = { refUsername }
        />{' '} <
        /li>{' '} <
        li >
        <
        UpdateLabel >
        <
        div > 현재 비밀번호 < /div>{' '} <
        /UpdateLabel>{' '} <
        UpdateInput type = "password"
        value = { inputOldPassword }
        placeholder = "Password"
        onChange = { handleChangeOldPassword }
        onKeyPress = { handleMoveToNewpassword }
        ref = { refOldPassword }
        />{' '} <
        /li>{' '} <
        li >
        <
        UpdateLabel >
        <
        div > 새 비밀번호 < /div>{' '} <
        /UpdateLabel>{' '} <
        UpdateInput type = "password"
        value = { inputNewPassword }
        placeholder = "Password"
        onChange = { handleChangeNewPassword }
        onKeyPress = { handleMoveToNewpasswordCheck }
        ref = { refNewPassword }
        />{' '} <
        /li>{' '} <
        li >
        <
        UpdateLabel >
        <
        div > 새 비밀번호 확인 < /div>{' '} <
        /UpdateLabel>{' '} <
        UpdateInput type = "password"
        value = { inputNewPasswordCheck }
        placeholder = "Password Confirm"
        onChange = { handleChangeNewPasswordCheck }
        onKeyPress = { handleMoveToSignUp }
        ref = { refNewPasswordCheck }
        />{' '} <
        /li>{' '} <
        /ul>{' '} <
        p className = "deny-message" > { denyMessage } < /p>{' '} <
        UpdateSubmitBtn onClick = { handleSignup } > { ' ' }
        수정 완료 { ' ' } <
        /UpdateSubmitBtn>{' '} <
        WithdrawBtn >
        <
        button onClick = {
            () => withdrawalBtn() } > 탈퇴하기 < /button>{' '} <
        /WithdrawBtn>{' '} <
        /UpdateWrapper>{' '} <
        /ModalBox>{' '} <
        /ModalBack>{' '} <
        />
    );
};

export default withRouter(UpdateModal);