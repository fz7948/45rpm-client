import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal,
  inquiryModal,
  alertAnswerTrueModal,
} from '../../../modules/modal';
import {
  questionAddReq,
  questionListReq,
  questionDeleteReq,
} from '../../../modules/question';
import InquiryModal from '../../auth/InquiryModal/index';
import CommonTable from '../../table/CommonTable';
import InquiryTable from '../InquiryTable/index';
import AlertModal from '../../common/Modal/AlertModal';
import {
  Container,
  HeaderWrapper,
  InquiryIntro,
  Button,
  ButtonWrapper,
} from './styles';

const Inquires = () => {
  const dispatch = useDispatch();
  const {
    checkModal,
    token,
    questionList,
    isType,
    alertCheck,
    admin,
  } = useSelector(({ modal, user, question }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
    alertCheck: modal.alertCheck,
    token: user.token,
    questionList: question.questionList,
    admin: user.admin,
  }));

  useEffect(() => {
    dispatch(questionListReq(token));
  }, [token, dispatch]);

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
