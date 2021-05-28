import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../../components/auth/UpdateModal';
import AlbumDetailModal from '../../components/auth/AlbumDetailModal';
import Hero from '../../components/Hero/Hero';
import { closeModal, albumDetailModal, infoModal } from '../../modules/modal';
import { kakaoLoginReq, userInfoReq } from '../../modules/auth';
import {
  MyPageWrapper,
  MyPageContent,
  MyPageInfoWrapper,
  MyPageImage,
  MyPageInfo,
  MyPageSlide,
  MyPageButton,
  ButtonWrapper,
} from '../../components/common/MyPageStyle';
import AlertModal from '../../components/common/AlertModal';

const MyPageForm = () => {
  const dispatch = useDispatch();
  const { checkModal, isType, info, token, alertCheck } = useSelector(
    ({ modal, auth, user }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      info: auth.info,
      token: user.token,
      alertCheck: modal.alertCheck,
    }),
  );

  const [infoDefaultId, setInfoDefaultId] = useState('');
  const [infoDefaultEmail, setInfoDefaultEmail] = useState('');
  const [infoDefaultUsername, setInfoDefaultUsername] = useState('');
  const [heroListNumber, setHeroListNumber] = useState(0);
  const [customData, setCustomData] = useState([]);

  useEffect(async () => {
    if (token) {
      dispatch(userInfoReq(token)).then(async () => {
        await axios
          .get(`${process.env.REACT_APP_SERVER_URI}/customs/my-customs`, {
            headers: {
              authorization: `Bearer ${token}`,
              withCredential: true,
            },
          })
          .then((response) => {
            setCustomData(response.data.data);
          });
      });
    }
  }, [token]);

  useEffect(async () => {
    if (info !== undefined && info !== null) {
      const { id, email, username } = info.data;
      setInfoDefaultEmail({ email });
      setInfoDefaultUsername({ username });
      setInfoDefaultId({ id });
    }
  }, [info]);

  const aboutInfoModal = () => {
    dispatch(infoModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  const openDetailModal = () => {
    dispatch(albumDetailModal());
  };

  const herohandler = (data) => {
    setHeroListNumber(data);
  };
  return (
    <>
      <MyPageWrapper>
        <MyPageContent>
          <MyPageInfoWrapper>
            <MyPageImage>
              <img src="/images/add.png"></img>
              <p>사진 올리기</p>
            </MyPageImage>
            <MyPageInfo>
              <p>안녕하세요</p>
              <p>{infoDefaultEmail.email}</p>
              <p>{infoDefaultUsername.username}</p>
            </MyPageInfo>
          </MyPageInfoWrapper>
        </MyPageContent>
        <ButtonWrapper>
          <MyPageButton onClick={aboutInfoModal}>정보 수정</MyPageButton>
        </ButtonWrapper>
        <MyPageSlide>
          <Hero
            slides={customData}
            openModal={openDetailModal}
            herohandler={herohandler}
          />
        </MyPageSlide>
        {isType === 'detail' && (
          <AlbumDetailModal
            slides={customData}
            open={checkModal}
            close={shutModal}
            heroListNumber={heroListNumber}
          />
        )}
        {isType === 'info' && (
          <UpdateModal
            open={checkModal}
            close={shutModal}
            userId={infoDefaultId.id}
            userEmail={infoDefaultEmail.email}
            username={infoDefaultUsername.username}
          />
        )}
        {/* {isType === 'alert' && (
          <AlertModal
            openHandle={alertCheck}
            closeHandle={shutModal}
            comment={'기본 비밀번호는 카카오 계정의 이메일 주소입니다'}
          ></AlertModal>
        )} */}
      </MyPageWrapper>
    </>
  );
};

export default MyPageForm;
