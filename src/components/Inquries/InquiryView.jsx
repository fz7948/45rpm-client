import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ViewTable from './ViewTable';
import { useSelector } from 'react-redux';

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
  const { questionList } = useSelector(({ question }) => ({
    questionList: question.questionList,
  }));

  const [data, setData] = useState({ data: [{}] });
  const { id } = match.params;

  useEffect(() => {
    if (questionList) {
      setData(questionList.data);
      console.log('상세페이지??', questionList.data);
      console.log('데이터', data);
    }
  }, []);

  console.log('랜더링???', data);

  const filterData = (id) => {
    console.log('id', id);
    const array = questionList.data.filter((el) => el._id === `${id}`);
    console.log('array??', array);
    return array;
  };

  useEffect(() => {
    setData(filterData(id));
  }, []);

  return (
    <Container>
      <H2Title>문의 상세정보</H2Title>
      <ViewTable data={data} key={data._id} />
    </Container>
  );
};

export default InquiryView;
