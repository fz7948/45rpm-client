import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal, closeModal } from '../../modules/modal';
import { questionAddReq, questionListReq } from '../../modules/question';

import ReactHtmlParser from 'react-html-parser';
import InquiryModal from '../auth/InquiryModal';
import { InquiryDataList } from '../data/InquiryData';
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
  InquiryTop,
} from '../common/InquiryStyle';

const Inquires = () => {
  const dispatch = useDispatch();
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
    dispatch(questionListReq(token));
  }, [checkModal, dispatch]);

  useEffect(() => {
    if (questionList) {
      setLnquireList(questionList);
    }
  }, [questionList]);

  const onSubmitHand = (data, category) => {
    const { title, content } = data;
    console.log('split이니?', title, content);
    const data1 = content.split('<p>')[1];
    const contents = data1.split('</p>')[0];
    dispatch(questionAddReq(title, contents, category.value, token));
    dispatch(questionListReq(token));
  };

  return (
    <Container>
      <InquiryWrapper>
      <InquiryContainer>
        <InquiryTop>
          <InquiryTitle>문의 내역</InquiryTitle>
          <InquiryContent>
            <Content>
              {lnquireList[0].data.map((el) => (
                <Title>
                  <TextWrapper>
                    <h2>{el.title}</h2>
                    <h4>{el.category}</h4>
                    <InnerContent>{ReactHtmlParser(el.contents)}</InnerContent>
                  </TextWrapper>
                  <QuestIcon />
                </Title>
              ))}
            </Content>
          </InquiryContent>
        </InquiryContainer>
        <Button onClick={openModal}>글쓰기</Button>
        <InquiryModal
          open={checkModal}
          close={shutModal}
          onSubmitHand={onSubmitHand}
        ></InquiryModal>
      </InquiryWrapper>

    </Container>
  );
};

export default Inquires;
