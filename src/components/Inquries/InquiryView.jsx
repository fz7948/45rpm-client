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
  height: 100vh;
  padding-top: 2rem;
  color: #000;

  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    padding-top: 3rem;
  }
`;

const H2Title = styled.h2`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  background: lightgray;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem 2rem;
    margin: 0 auto;
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
    }
  }, [token]);

  const questionHandler = () => {
    dispatch(questionListReq(token));
  };

  const filterData = (id) => {
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
