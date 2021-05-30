import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { questionUpdateReq, questionListReq } from '../../modules/question';

const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 5;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  padding-top: 3rem;
  border: 1px solid gray;

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

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    padding-left: 0;
    margin-right: 2rem;
  }
`;
const InquiryRow = styled.div`
  display: flex;
  margin: 10px 0;
  display: flex;
  border-bottom: 0.7px solid lightgray;
  padding-bottom: 0.5rem;
  margin-right: 10rem;
  label {
    &:nth-child(1) {
      width: 10rem;
      height: 2.5rem;
      text-align: center;
      border: 1px solid black;
      padding-top: 0.4rem;
      margin-right: 2rem;
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
        border: 1px solid black;
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
  font-family: 'Jua', sans-serif;
  font-size: 1.3rem;
  margin: 1rem;
  outline: none;
  background-color: #eee;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
    border: none;
  }
`;

const ButtonWrap = styled.button`
  ${common}
  width:13rem;
  height: 4rem;

  @media screen and (max-width: 768px) {
    width: 9rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

const InputDetailStyle = styled.input`
  outline: none;
  padding-left: 10px;
  border: 0px;
  box-sizing: border-box;
  width: 250px;
  height: 2.2rem;
  font-size: 20px;
  &:focus {
    outline: 0;
    border: 1px solid #f73d5c;
    transition: all ease 0.3s;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

const View = ({ view }) => {
  // if (Object.keys(view) === 0) {
  //   console.log('뜨냐');
  // }
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));

  console.log('view???', view);

  // view[0].userId;
  // view[0].category;
  // view[0].title;
  // view[0].createdAt;
  // view[0].contents;

  // let view = [{ title: '', contents: '' }];

  const [detailID, setDetailID] = useState('');
  const [detailCategory, setDetailCategory] = useState('');
  const [detailTitle, setDetailTitle] = useState('');
  const [detailCreatedAt, setDetailCreatedAt] = useState('');
  const [detailContent, setDetailCotent] = useState('');

  const handleChangeID = useCallback(
    (e) => {
      setDetailID(view[0].userId);
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
      setDetailCreatedAt(view[0].createdAt);
    },
    [detailCreatedAt],
  );

  const handleChangeContent = useCallback(
    (e) => {
      setDetailCotent(e.target.value);
    },
    [detailContent],
  );

  const detailUpdateHandler = () => {
    console.log('이건?', view[0]._id);
    dispatch(questionUpdateReq(view[0]._id, detailTitle, detailContent, token));
    setTimeout(onDispatchHandler, 100);
  };

  const onDispatchHandler = () => {
    dispatch(questionListReq(token));
  };

  // {view[0].userId}
  // {view[0].category}
  // {view[0].title}
  // {view[0].createdAt}
  // {view[0].contents}

  // console.log('입력값 category', detailCategory);
  // console.log('입력값 title', detailTitle);
  // console.log('입력값 contents', detailContent);

  console.log('뷰@@', view);
  return (
    <>
      {view.length > 0 && (
        <InquiryWrapper>
          <InquiryCollection>
            <InquiryRow>
              <label> 작성자 </label>
              <InputDetailStyle
                type="text"
                value={view[0].userId}
                onChange={handleChangeID}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 카테고리 </label>
              <InputDetailStyle
                type="text"
                value={view[0].category}
                onChange={handleChangeCategory}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 제목 </label>
              <InputDetailStyle
                type="text"
                value={detailTitle}
                placeholder={view[0].title}
                onChange={handleChangeTitle}
              />
            </InquiryRow>
            <InquiryRow>
              <label> 등록일 </label>
              <InputDetailStyle
                type="text"
                value={view[0].createdAt}
                onChange={handleChangeCreatedAt}
                readOnly
              />
            </InquiryRow>
            <InquiryRow>
              <label> 내용 </label>
              <InputDetailStyle
                type="text"
                value={detailContent}
                placeholder={view[0].contents}
                onChange={handleChangeContent}
              />
            </InquiryRow>
          </InquiryCollection>
          <ButtonWrapper>
            <ButtonWrap onClick={() => history.push('/2')}>
              목록으로 돌아가기
            </ButtonWrap>
            <ButtonWrap onClick={detailUpdateHandler}> 수정하기 </ButtonWrap>
          </ButtonWrapper>
        </InquiryWrapper>
      )}
    </>
  );
};

const ViewTable = ({ data }) => {
  console.log('DATA>>>>>>', data);
  return (
    <>
      <View view={data} key={data._id} />
    </>
  );
};

export default ViewTable;
