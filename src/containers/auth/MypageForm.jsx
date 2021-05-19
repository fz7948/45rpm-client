import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../../components/auth/UpdateModal';
import { showModal, closeModal } from '../../modules/modal';

const MypageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 2vw;
  width: 100vw;
  height: auto;
  min-width: 760px;
  max-width: 1585px;
  p {
    margin-bottom: 0.8rem;
  }
  .side {
    position: sticky;
    left: 90rem;
    height: 2rem;
    width: 2rem;
    opacity: 0.6;
    cursor: pointer;
  }
  .infoBtn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 46.5rem;
  }
`;

const MypageContent = styled.div`
  display: flex;
  padding: 1.6rem;
  margin-left: 15vw;
  margin-right: 13vw;
  background: #e8e8e8;
  border-radius: 6px;
  margin-top: 10px;
`;

const MypageImage = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
  margin-left: 2rem;
  border-radius: 6px;
  min-width: 10rem;
  width: 10rem;
  height: 200px;
  border: 2px dashed #ccc;
  img {
    height: 1rem;
    opacity: 0.6;
  }
  p {
    opacity: 0.7;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
  &:hover {
    background-color: #f3667236;
    transition: 0.5s all ease;
  }
`;

const MypageInfo = styled.div`
  width: 40rem;
  height: 200px;
  background: #ccc;
  padding: 30px;
  font-size: small;
`;

const MypageSlide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const MypageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 15rem;
  background: #ccc;
  margin-left: 1rem;
  border-radius: 3px;
  &:hover {
    background-color: #f3667236;
    transition: 0.5s all ease;
  }
`;

const MypageButton = styled.button`
  cursor: pointer;
  margin-top: 2rem;
  background-color: #eee;
  height: 2.5rem;
  width: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 0;
  outline: 0;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
  }
`;

const MypageForm = () => {
  const { checkModal } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
  }));
  const dispatch = useDispatch();

  const testClick = () => {
    alert('사이드바 정상 작동');
  };

  const openModal = () => {
    dispatch(showModal());
  };

  const shutModal = (e) => {
    dispatch(closeModal());
  };

  const onSubmitHand = (data) => {};

  return (
    <>
      <MypageWrapper>
        <img
          className="side"
          src="/images/sidebar.png"
          onClick={testClick}
        ></img>

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
          <MypageItem>1</MypageItem>
          <MypageItem>2</MypageItem>
          <MypageItem>3</MypageItem>
          <MypageItem>4</MypageItem>
          <MypageItem>5</MypageItem>
        </MypageSlide>
        <div className="infoBtn">
          <MypageButton onClick={openModal}>정보 수정</MypageButton>
        </div>
        <UpdateModal
          open={checkModal}
          close={shutModal}
          onSubmitHand={onSubmitHand}
        />
      </MypageWrapper>
    </>
  );
};

export default MypageForm;
