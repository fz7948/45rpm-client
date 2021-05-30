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
  const { questionList } = useSelector(({ question }) => ({
    questionList: question.questionList,
  }));

  const [data, setData] = useState({ data: [{}] });
  const { id } = match.params;

  useEffect(() => {
    if (questionList) {
      setData(questionList.data);
      console.log('<D<F>D<D>F</D></F>', questionList);
      console.log('상세페이지??', questionList.data);
    }
  }, []);

  console.log('랜더링???', data);

  const filterData = (id) => {
    console.log('id', id);
    if (!questionList || !questionList.data) return null;

    const array = questionList.data.filter((el) => el._id === `${id}`);
    console.log('array??', array);
    return array;
  };

  useEffect(() => {
    setData(filterData(id));
  }, []);

  return (
    <Container>
      <H2Title> 문의 상세정보 </H2Title>
      <ViewTable data={data} key={data._id} />
    </Container>
  );
};

export default InquiryView;
