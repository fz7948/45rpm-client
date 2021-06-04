import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  inquiryModal,
  alertAnswerTrueModal,
} from '../../modules/modal';
import {
  questionAddReq,
  questionListReq,
  questionDeleteReq,
} from '../../modules/question';
import InquiryModal from '../auth/InquiryModal';
import CommonTable from '../table/CommonTable';
import InquiryTable from './InquiryTable';
import styled from 'styled-components';
import AlertModal from '../../components/common/AlertModal';

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
    background: #ffffff;
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
  background: #e8e8e8;
  border: 1px solid #b5b9b9;
  width: 70%;
  padding: 3rem 0rem 1rem 0rem;
  margin-top: 3rem;
  .small {
    font-size: 1rem;
    padding-top: 1rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    color: #4c4c4c;
  }
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
  button {
    cursor: pointer;
    height: 3rem;
    width: 10rem;
    border-radius: 3px;
    border: 0;
    outline: 0;
    background-color: #03154e;
    color: #e1eaf8;
    font-size: 1rem;
    &:hover {
      background-color: #03154e;
      transition: all ease 0.3s;
      color: gray;
    }
  }
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
  font-size: 2rem;
  background: #e8e8e8;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: #4c4c4c;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Inquires = () => {
  const dispatch = useDispatch();
  const { checkModal, token, questionList, isType, alertCheck, admin } =
    useSelector(({ modal, user, question }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      alertCheck: modal.alertCheck,
      token: user.token,
      questionList: question.questionList,
      admin: user.admin,
    }));

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
    if (admin) {
      dispatch(alertAnswerTrueModal());
    }
    if (!admin) {
      dispatch(inquiryModal());
    }
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
        <InquiryIntro>이용하는데 어려움이 있나요?</InquiryIntro>
        <InquiryIntro className="small">
          45rpm은 여러분이 문의를 남겨주시면 24시간안에 답변드립니다
        </InquiryIntro>
        <InquiryIntro className="small">
          제목을 누르면 상세정보를 확인할 수 있습니다
        </InquiryIntro>
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
      {isType === 'alertAnswer' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'관리자 권한이 필요합니다.'}
        />
      )}
      {isType === 'alertAnswerFalse' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'관리자님, 문의 답변을 달아주세요.'}
        />
      )}
      {isType === 'alertAnswerTrue' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'관리자는 문의를 작성할 수 없습니다.'}
        />
      )}
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
