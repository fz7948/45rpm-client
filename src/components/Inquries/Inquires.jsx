import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, closeModal } from '../../modules/modal';
import { questionAddReq, questionListReq } from '../../modules/question';
// import ReactHtmlParser from 'react-html-parser';
import InquiryModal from '../auth/InquiryModal';
import { InquiryDataList } from '../data/InquiryData';
import CommonTable from '../table/CommonTable';
import InquiryTable from './InquiryTable';
import styled from 'styled-components';
import {
  Container,
  InquiryContainer,
  InquiryTitle,
  InquiryContent,
  Button,
  Title,
  InnerContent,
  QuestIcon,
  TextWrapper,
} from '../common/InquiryStyle';

const Inquires = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  `;
  const InquiryIntro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    font-size: 2.5rem;
    background: lightgray;
    padding-top: 3rem;

    @media screen and (max-width: 768px) {
      height: 150px;
      font-size: 2rem;
      padding-top: 3rem;
    }
  `;
  const dispatch = useDispatch();
  const [dataGroup, setDataGroup] = useState([]);
  const { checkModal, token, questionList } = useSelector(
    ({ modal, user, question }) => ({
      checkModal: modal.checkModal,
      token: user.token,
      questionList: question.questionList,
    }),
  );

  const [lnquireList, setLnquireList] = useState([{}]);

  const openModal = () => {
    dispatch(showModal());
  };
  const shutModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    setDataGroup(InquiryDataList);
  }, [dataGroup]);

  useEffect(() => {
    dispatch(questionListReq(token));
  }, [checkModal, dispatch]);

  useEffect(() => {
    if (questionList) {
      setLnquireList(questionList);
    }

    console.log('문의 리스트', lnquireList);
  }, [dataGroup]);

  // console.log('되냐', questionList);

  const onSubmitHand = (data, category) => {
    const { title, content } = data;
    console.log('split이니?', title, content);
    const data1 = content.split('<p>')[1];
    const contents = data1.split('</p>')[0];
    dispatch(questionAddReq(title, contents, category.value, token));
  };

  const handleRemove = (id) => {
    setDataGroup(dataGroup.filter((el) => el.id !== id));
    dataGroup.length -= 1;
  };
  return (
    <Container>
      <InquiryIntro>문의 목록</InquiryIntro>
      <CommonTable
        headersName={[
          '글 번호',
          '카테고리',
          '제목',
          '답변 상태',
          '등록일',
          '관리',
        ]}
      >
        <InquiryTable dataGroup={dataGroup} handleRemove={handleRemove} />
      </CommonTable>
      <Button onClick={openModal}> 문의하기 </Button>
      <InquiryModal
        open={checkModal}
        close={shutModal}
        onSubmitHand={onSubmitHand}
      ></InquiryModal>
    </Container>
  );
};

export default Inquires;
