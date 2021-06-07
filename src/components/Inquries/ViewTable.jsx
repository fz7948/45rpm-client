import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  questionUpdateReq,
  questionReplyReq,
  questionReplyUpdateReq,
} from '../../modules/question';
import {
  closeModal,
  alertAnswerUpdateModal,
  alertAnswerReplyModal,
  answerUpdateModalStart,
} from '../../modules/modal';
import AlertModal from '../../components/common/AlertModal';
import palette from '../../lib/styles/palette';

const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 5;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  padding-top: 3rem;
  border: 1px solid ${palette.mainBorder};
  background-color: #fafafa;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
    width: 90%;
    height: 100%;
  }
`;

const InquiryCollection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    padding-left: 0;
    margin-right: 2rem;
  }
`;
const InquiryRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 65%;
  padding-bottom: 0.5rem;
  background-color: white;
  border: 1px solid ${palette.mainBorder};

  label {
    &:nth-child(1) {
      width: 15rem;
      height: 100%;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      color: ${palette.sideBack};
      padding-top: 0.4rem;
      margin-right: 2rem;
      background: #495263;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 4px;
      ${(props) =>
        props.replyReady &&
        css`
          background-color: #d3d3d3;
        `}
      ${(props) =>
        props.replyConfirm &&
        css`
          background-color: ${palette.mainRed};
        `}
    }
  }

  @media screen and (max-width: 768px) {
    border-bottom: 0.7px solid lightgray;
    padding-bottom: 0.5rem;
    margin-right: 1rem;
    label {
      &:nth-child(1) {
        width: 150px;
        text-align: center;
        margin-right: 2rem;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const common = css`
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 5rem 2rem 1rem 2rem;
  background-color: ${palette.mainHover};
  color: #e1eaf8;
  font-size: 1rem;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
    color: gray;
  }
`;

const ButtonWrap = styled.button`
  ${common}
  width:10rem;
  height: 3rem;

  @media screen and (max-width: 768px) {
    width: 9rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const InputDetailStyle = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  margin-top: 7px;
  outline: none;
  padding-left: 8px;
  border: 0px;
  box-sizing: border-box;
  width: 67%;
  height: 2.1rem;
  font-size: 1.1rem;
  &:focus {
    outline: 0;
    background-color: #efefef;
    transition: all ease 0.3s;
    border-radius: 3px;
  }
  ${(props) =>
    props.date &&
    css`
      font-size: 1.02rem;
    `}
`;

const InputDetailText = styled.textarea`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  margin-top: 7px;
  outline: none;
  padding-left: 10px;
  border: 0px;
  box-sizing: border-box;
  font-size: 1.1rem;
  padding-top: 10px;
  resize: none;
  width: 67%;
  height: 12rem;
  &:focus {
    outline: 0;
    background-color: #efefef;
    transition: all ease 0.3s;
    border-radius: 3px;
  }
  ${(props) =>
    props.ready &&
    css`
      height: 2.5rem;
    `}

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

const DivDetailText = styled.div`
  overflow: auto;
  height: 12rem;
  word-break: break-all;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  margin-top: 7px;
  outline: none;
  padding-left: 8px;
  border: 0px;
  box-sizing: border-box;
  width: 67%;
  font-size: 1.1rem;
  &:focus {
    outline: 0;
    background-color: #efefef;
    transition: all ease 0.3s;
    border-radius: 3px;
  }
`;

const View = ({ view }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { admin, token, isType, alertCheck } = useSelector(
    ({ user, modal }) => ({
      token: user.token,
      admin: user.admin,
      isType: modal.isType,
      alertCheck: modal.alertCheck,
    }),
  );

  useEffect(() => {
    if (view.reply) {
      setDetailReply(view[0].reply.replyText);
    }
  }, []);

  const [detailID, setDetailID] = useState(view[0].userId);
  const [detailCategory, setDetailCategory] = useState(view[0].category);
  const [detailTitle, setDetailTitle] = useState(view[0].title);
  const [detailCreatedAt, setDetailCreatedAt] = useState(view[0].createdAt);
  const [detailContent, setDetailCotent] = useState(view[0].contents);
  const [detailReply, setDetailReply] = useState(view[0].reply);
  const [detailReplyCheck, setDetailReplyCheck] = useState(view[0].replyCheck);
  const [inputType, setinputType] = useState(false);

  const handleChangeID = useCallback(
    (e) => {
      setDetailID(e.view[0].userId);
    },
    [detailID],
  );

  const handleChangeCategory = useCallback(
    (e) => {
      setDetailCategory(e.target.value);
    },
    [detailCategory],
  );

  const handleChangeTitle = useCallback(
    (e) => {
      setDetailTitle(e.target.value);
    },
    [detailTitle],
  );

  const handleChangeCreatedAt = useCallback(
    (e) => {
      setDetailCreatedAt(e.view[0].createdAt);
    },
    [detailCreatedAt],
  );

  const handleChangeContent = useCallback(
    (e) => {
      setDetailCotent(e.target.value);
    },
    [detailContent],
  );

  const handleChangeReply = useCallback(
    (e) => {
      setDetailReply(e.target.value);
    },
    [detailReply],
  );

  const shutModal = () => {
    dispatch(closeModal());
  };

  const detailUpdateStart = () => {
    dispatch(answerUpdateModalStart());
    setinputType(true);
  };

  const detailUpdateEnd = () => {
    dispatch(questionUpdateReq(view[0]._id, detailTitle, detailContent, token));
    dispatch(alertAnswerUpdateModal());
    setinputType(false);
  };

  const detailReplyHandler = () => {
    if (detailReplyCheck === false) {
      setDetailReplyCheck(true);
      dispatch(questionReplyReq(token, view[0]._id, detailReply, true));
    }
    if (detailReplyCheck === true) {
      setDetailReplyCheck(true);
      dispatch(questionReplyUpdateReq(token, view[0]._id, detailReply, true));
    }
    dispatch(alertAnswerReplyModal());
  };

  return (
    <>
      {isType === 'alertAnswerUpdate' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'수정 완료되었습니다.'}
        />
      )}
      {isType === 'alertAnswerStart' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'문의 내역을 수정 해주세요.'}
        />
      )}
      {isType === 'alertAnswerReply' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'답변 완료되었습니다.'}
        />
      )}
      {admin ? (
        <InquiryWrapper>
          <InquiryCollection>
            <InquiryRow>
              <label> 작성자 </label>
              <InputDetailStyle
                type="text"
                value={detailID}
                onChange={handleChangeID}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 카테고리 </label>
              <InputDetailStyle
                type="text"
                value={detailCategory}
                onChange={handleChangeCategory}
                readOnly
              />
            </InquiryRow>

            <InquiryRow>
              <label> 등록일 </label>
              <InputDetailStyle
                date
                type="text"
                value={detailCreatedAt}
                onChange={handleChangeCreatedAt}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 제목 </label>
              <InputDetailStyle
                type="text"
                value={detailTitle}
                onChange={handleChangeTitle}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label>내용</label>
              <DivDetailText
                dangerouslySetInnerHTML={{ __html: detailContent }}
              ></DivDetailText>
            </InquiryRow>
            <InquiryRow>
              <label>답변</label>
              <InputDetailText
                type="text"
                value={detailReply}
                onChange={handleChangeReply}
              />
            </InquiryRow>
          </InquiryCollection>
          <ButtonWrapper>
            <ButtonWrap onClick={() => history.push('/inquiry')}>
              목록으로 돌아가기
            </ButtonWrap>
            <ButtonWrap onClick={detailReplyHandler}> 답변하기 </ButtonWrap>
          </ButtonWrapper>
        </InquiryWrapper>
      ) : (
        <InquiryWrapper>
          <InquiryCollection>
            <InquiryRow>
              <label> 작성자 </label>
              <InputDetailStyle
                type="text"
                value={detailID}
                onChange={handleChangeID}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 카테고리 </label>
              <InputDetailStyle
                type="text"
                value={detailCategory}
                onChange={handleChangeCategory}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 등록일 </label>
              <InputDetailStyle
                type="text"
                value={detailCreatedAt}
                onChange={handleChangeCreatedAt}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 제목 </label>
              {inputType ? (
                <InputDetailStyle
                  update
                  type="text"
                  value={detailTitle}
                  onChange={handleChangeTitle}
                />
              ) : (
                <InputDetailStyle
                  update
                  type="text"
                  value={detailTitle}
                  onChange={handleChangeTitle}
                  readOnly
                />
              )}
            </InquiryRow>
            <InquiryRow>
              <label>내용</label>
              {inputType ? (
                <InputDetailText
                  type="text"
                  value={detailContent}
                  onChange={handleChangeContent}
                />
              ) : (
                <DivDetailText
                  dangerouslySetInnerHTML={{ __html: detailContent }}
                ></DivDetailText>
              )}
            </InquiryRow>
            {detailReply.length === 0 && (
              <InquiryRow replyReady>
                <label>답변 준비중</label>
                <InputDetailText
                  ready
                  type="text"
                  value="답변이 도착하기 전입니다. 조금만 기다려주세요 !"
                  onChange={handleChangeReply}
                  readOnly
                />
              </InquiryRow>
            )}
            {detailReply.length !== 0 && (
              <InquiryRow replyConfirm>
                <label>답변 도착</label>
                <InputDetailText
                  type="text"
                  value={detailReply}
                  onChange={handleChangeReply}
                  readOnly
                />
              </InquiryRow>
            )}
          </InquiryCollection>
          <ButtonWrapper>
            <ButtonWrap onClick={() => history.push('/inquiry')}>
              목록으로 돌아가기
            </ButtonWrap>
            {inputType ? (
              <ButtonWrap onClick={detailUpdateEnd}> 수정완료 </ButtonWrap>
            ) : (
              <ButtonWrap onClick={detailUpdateStart}> 수정하기 </ButtonWrap>
            )}
          </ButtonWrapper>
        </InquiryWrapper>
      )}
    </>
  );
};

const ViewTable = ({ data }) => {
  return (
    <>
      <View view={data} key={data._id} />
    </>
  );
};

export default ViewTable;
