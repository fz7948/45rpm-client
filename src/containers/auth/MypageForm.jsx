import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../../components/auth/UpdateModal';
import AlbumDetailModal from '../../components/auth/AlbumDetailModal';
import Sidebar from '../../components/common/Sidebar';
import Hero from '../../components/Hero/Hero';
import { closeModal, albumDetailModal, infoModal } from '../../modules/modal';
import { SliderData } from '../../components/data/SliderData';
import {
  MypageWrapper,
  MypageContent,
  MypageImage,
  MypageInfo,
  MypageSlide,
  MypageButton,
} from '../../components/common/MyPageStyle';

const MypageForm = () => {
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
      <MypageWrapper>
        <Sidebar />
        <MypageContent>
          <MypageImage>
            <img src="/images/add.png"></img>
            <p>사진 올리기</p>
          </MypageImage>
          <MypageInfo>
            <p>안녕하세요</p>
            <p>오우영</p>
            <p>fz7948@gmail.com</p>
          </MypageInfo>
        </MypageContent>
        <MypageSlide>
          <Hero slides={SliderData} openModal={openDetailModal} />
        </MypageSlide>
        {isType === 'detail' && (
          <AlbumDetailModal
            slides={SliderData}
            open={checkModal}
            close={shutModal}
            onSubmitHand={onSubmitHand}
          />
        )}
        <div className="infoBtn">
          <MypageButton onClick={aboutInfoModal}>정보 수정</MypageButton>
        </div>
        {isType === 'info' && (
          <UpdateModal
            open={checkModal}
            close={shutModal}
            onSubmitHand={onSubmitHand}
          />
        )}
      </MypageWrapper>
    </>
  );
};

export default MypageForm;
