import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../../components/auth/UpdateModal';
import AlbumDetailModal from '../../components/auth/AlbumDetailModal';
import Hero from '../../components/Hero/Hero';
import { closeModal, albumDetailModal, infoModal } from '../../modules/modal';
import { userInfoReq } from '../../modules/auth';
import { SliderData } from '../../components/data/SliderData';
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

const MyPageForm = () => {
  const dispatch = useDispatch();
  const { checkModal, isType, info, token } = useSelector(
    ({ modal, auth, user }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      info: auth.info,
      token: user.token,
    }),
  );

  const [infoData, setInfoData] = useState('');

  useEffect(() => {
    dispatch(userInfoReq(token));
  }, [checkModal, dispatch]);

  useEffect(() => {
    if (info) {
      console.log('??', info);
      const { id, email, username } = info.data;
      setInfoData({ email, username });
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
              <p>{infoData.username}</p>
              <p>{infoData.email}</p>
            </MyPageInfo>
          </MyPageInfoWrapper>
        </MyPageContent>
        <ButtonWrapper>
          <MyPageButton onClick={aboutInfoModal}>정보 수정</MyPageButton>
        </ButtonWrapper>
        <MyPageSlide>
          <Hero slides={SliderData} openModal={openDetailModal} />
        </MyPageSlide>
        {isType === 'detail' && (
          <AlbumDetailModal
            slides={SliderData}
            open={checkModal}
            close={shutModal}
          />
        )}
        {isType === 'info' && (
          <UpdateModal open={checkModal} close={shutModal} />
        )}
      </MyPageWrapper>
    </>
  );
};

export default MyPageForm;
