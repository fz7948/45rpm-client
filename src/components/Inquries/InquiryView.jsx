import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ViewTable from './ViewTable';
import { useDispatch, useSelector } from 'react-redux';

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
  console.log('매치가 뭐야', match);
  const dispatch = useDispatch();
  const { questionList } = useSelector(({ question }) => ({
    questionList: question.questionList,
  }));

  useEffect(() => {
    if (questionList) {
      setData(questionList.data);
    }
  }, [questionList]);

  const [data, setData] = useState({});
  const { id } = match.params;

  const filterData = () => {
    questionList.data.filter((el) => el._id);
  };

  console.log('데이터가 뭐니', data);
  console.log('아이디가 뭐니', id);
  return (
    <Container>
      <H2Title>문의 상세정보</H2Title>
      <ViewTable data={data} userId={id} />
    </Container>
  );
};

export default InquiryView;
