import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, closeModal, inquiryModal } from '../../modules/modal';
import {
  questionAddReq,
  questionListReq,
  questionDeleteReq,
} from '../../modules/question';
// import ReactHtmlParser from 'react-html-parser';
import InquiryModal from '../auth/InquiryModal';
import CommonTable from '../table/CommonTable';
import InquiryTable from './InquiryTable';
import styled from 'styled-components';

const Inquires = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    margin: 0;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.4);
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  `;
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgray;
    width: 100%;
    padding: 3rem 0;
    @media screen and (max-width: 768px) {
      padding: 4rem 0;
    }
  `;
  const InquiryIntro = styled.div`
    font-size: 2.5rem;
    background: lightgray;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  `;

  const ButtonWrapper = styled.div`
    padding-bottom: 5rem;
  `;
  const Button = styled.button`
    width: calc(15vw + 6px);
    height: calc(5vw + 6px);
    margin-top: 3rem;
    font-size: 1.5rem;
    font-family: 'Jua', sans-serif;
    outline: none;
    background-color: #eee;

    cursor: pointer;
    &:hover {
      background-color: #ddd;
      transition: all ease 0.4s;
      border: none;
    }
    @media screen and (max-width: 768px) {
      width: calc(20vw + 6px);
      height: calc(7vw + 6px);
      font-size: 1rem;
      margin-top: 3rem;
    }
  `;

  const dispatch = useDispatch();
  const { checkModal, token, questionList, isType } = useSelector(
    ({ modal, user, question }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      token: user.token,
      questionList: question.questionList,
    }),
  );

  const [lnquireList, setLnquireList] = useState({ data: [{}] });

  const openModal = () => {
    dispatch(showModal());
  };
  const shutModal = () => {
    dispatch(closeModal());
  };

  const openInquiryModal = () => {
    dispatch(inquiryModal());
  };

  // useEffect(() => {
  //   setDataGroup(InquiryDataList);
  // }, [dataGroup]);

  useEffect(() => {
    dispatch(questionListReq(token));
  }, [checkModal, dispatch]);

  useEffect(() => {
    if (questionList) {
      setLnquireList(questionList);
    }
  }, [dispatch, questionList]);

  // useEffect(() => {
  //   dispatch(questionDeleteReq(token));
  // }, []);

  const onSubmitHand = (data, category) => {
    const { title, content } = data;
    const content1 = content.replace('<p>', '');
    const contents = content1.replace('</p>', '');
    // const data1 = content.split('<p>')[1];
    // const contents = data1.split('</p>')[0];
    dispatch(questionAddReq(title, contents, category.value, token));
    shutModal();
  };

  const handleRemove = (id) => {
    setLnquireList(lnquireList.data.filter((el) => el.id !== id));
    console.log('@@@@@@@@@@,,,.Remove', lnquireList);
  };
  console.log(',,,.Remove111111111', lnquireList.data);

  return (
    <Container>
      <HeaderWrapper>
        <InquiryIntro>문의 목록</InquiryIntro>
      </HeaderWrapper>
      <CommonTable
        headersName={[
          '작성자',
          '카테고리',
          '제목',
          '답변 상태',
          '등록일',
          '관리',
        ]}
      >
        <InquiryTable lnquireList={lnquireList} handleRemove={handleRemove} />
      </CommonTable>

      {isType === 'inquiry' && (
        <InquiryModal
          open={checkModal}
          close={shutModal}
          onSubmitHand={onSubmitHand}
        ></InquiryModal>
      )}
      <ButtonWrapper>
        <Button onClick={openInquiryModal}>문의하기</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Inquires;
