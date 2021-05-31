import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ViewTable from './ViewTable';
import { useDispatch, useSelector } from 'react-redux';
import { questionListReq } from '../../modules/question';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 94.9vh;
  padding-top: 2rem;
  color: #000;
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

const H2Title = styled.h2`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background: lightgray;
  border: 1px solid gray;
  width: 70%;
  height: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 90%;
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
  }
`;

const InquiryView = ({ match }) => {
  const dispatch = useDispatch();
  const { questionList, token } = useSelector(({ question, user }) => ({
    questionList: question.questionList,
    token: user.token,
  }));

  const [data, setData] = useState({ data: [{}] });
  const { id } = match.params;

  useEffect(() => {
    // setTimeout(questionHandler, 1000);
    if (questionList) {
      setData(questionList.data);

      console.log('<D<F>D<D>F</D></F>', questionList);
      console.log('상세페이지??', questionList.data);

    }
  }, [token]);

  const questionHandler = () => {
    dispatch(questionListReq(token));
  };

  const filterData = (id) => {

    console.log('id', id);
    if (!questionList || !questionList.data) return null;


    const array = questionList.data.filter((el) => el._id === `${id}`);
    return array;
  };

  useEffect(() => {
    setData(filterData(id));
  }, [token]);

  console.log('데이터는???', data);

  return (
    <Container>

      <H2Title>문의 상세정보</H2Title>
      {data.length > 0 && <ViewTable data={data} key={data._id} />}

    </Container>
  );
};

export default InquiryView;
