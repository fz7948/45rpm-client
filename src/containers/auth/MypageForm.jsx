import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../../components/auth/UpdateModal';
import AlbumDetailModal from '../../components/auth/AlbumDetailModal';
import Sidebar from '../../components/common/Sidebar';
import Hero from '../../components/Hero/Hero';
import { closeModal, albumDetailModal, infoModal } from '../../modules/modal';
import { SliderData } from '../../components/data/SliderData';
import {
  MyPageWrapper,
  MyPageContent,
  MyPageInfoWrapper,
  MyPageImage,
  MyPageInfo,
  MyPageSlide,
  MyPageButton,
} from '../../components/common/MyPageStyle';

const MyPageForm = () => {
  const { checkModal, isType } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
  }));
  const dispatch = useDispatch();

  const aboutInfoModal = () => {
    dispatch(infoModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  const openDetailModal = () => {
    dispatch(albumDetailModal());
  };

  const onSubmitHand = (data) => {};

  return (
    <>
      <MyPageWrapper>
        <Sidebar />
        <MyPageContent>
          <MyPageButton onClick={aboutInfoModal}>정보 수정</MyPageButton>
          <MyPageInfoWrapper>
            <MyPageImage>
              <img src="/images/add.png"></img>
              <p>사진 올리기</p>
            </MyPageImage>
            <MyPageInfo>
              <p>안녕하세요</p>
              <p>오우영</p>
              <p>fz7948@gmail.com</p>
            </MyPageInfo>
          </MyPageInfoWrapper>
        </MyPageContent>
        <MyPageSlide>
          <Hero slides={SliderData} openModal={openDetailModal} />
        </MyPageSlide>
        {isType === 'detail' && (
          <AlbumDetailModal
            slides={SliderData}
            open={checkModal}
            close={shutModal}
            onSubmitHand={onSubmitHand}
          />
        )}
        {isType === 'info' && (
          <UpdateModal
            open={checkModal}
            close={shutModal}
            onSubmitHand={onSubmitHand}
          />
        )}
      </MyPageWrapper>
    </>
  );
};

export default MyPageForm;
