import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, inquiryModal } from '../../modules/modal';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 94.9vh;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: lightgray;
  width: 70%;
  padding: 3rem 0;
  margin-top: 3rem;
  @media screen and (max-width: 768px) {
    padding: 4rem 0;
    margin-top: 2rem;
    width: 90%;
    height: 10%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 2rem;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
  }
`;

const Button = styled.button`
  width: calc(10vw + 6px);
  height: calc(3vw + 6px);
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
    width: calc(18vw + 6px);
    height: calc(5vw + 6px);
    font-size: 1rem;
  }
`;

const InquiryIntro = styled.div`
  font-size: 2.5rem;
  background: lightgray;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Inquires = () => {
  const dispatch = useDispatch();
  const { checkModal, token, questionList, isType } = useSelector(
    ({ modal, user, question }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      token: user.token,
      questionList: question.questionList,
    }),
  );

  useEffect(() => {
    dispatch(questionListReq(token));
  }, [token]);

  useEffect(() => {
    if (questionList) {
      setLnquireList(questionList);
    }
  }, [questionList]);

  const [lnquireList, setLnquireList] = useState({ data: [{}] });

  const shutModal = () => {
    dispatch(closeModal());
  };

  const openInquiryModal = () => {
    dispatch(inquiryModal());
  };

  const onSubmitHand = (data, category) => {
    const { title, content } = data;
    const content1 = content.replace('<p>', '');
    const contents = content1.replace('</p>', '');
    dispatch(questionAddReq(title, contents, category.value, token));
    shutModal();
  };

  const handleRemove = (data) => {
    console.log(data);
    dispatch(questionDeleteReq(token, data));
    const newList = lnquireList.data.filter((el) => el._id !== data);
    setLnquireList({ data: newList });
  };

  return (
    <Container>
      <HeaderWrapper>
        <InquiryIntro>문의 목록</InquiryIntro>
        <ButtonWrapper>
          <Button onClick={openInquiryModal}>문의하기</Button>
        </ButtonWrapper>
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
    </Container>
  );
};

export default Inquires;
