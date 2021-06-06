import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ViewTable from './ViewTable';
import { useSelector } from 'react-redux';
import palette from '../../lib/styles/palette';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 100vw;
  height: 94.9vh;
  color: #000;
  overflow: auto;
  padding-top: 3rem;
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

const H2Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${palette.mainBorder};
  width: 70%;
  height: 100%;
  margin: 0 auto;
  font-size: 2rem;
  background: ${palette.side};
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  color: ${palette.sideBack};
  padding-top: 5rem;

  .small.text {
    font-size: 1rem;
    padding: 10px 0px 15px 0px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    width: 90%;
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
  }
`;

const InquiryView = ({ match }) => {
  const { questionList, token } = useSelector(({ question, user }) => ({
    questionList: question.questionList,
    token: user.token,
  }));

  const [data, setData] = useState({ data: [{}] });
  const { id } = match.params;

  const filterData = (id) => {
    if (!questionList || !questionList.data) return null;

    const array = questionList.data.filter((el) => el._id === `${id}`);
    return array;
  };

  useEffect(() => {
    setData(filterData(id));
  }, [token]);

  return (
    <Container>
      <H2Title>
        <div>문의 내역을 확인하세요</div>
        <div className="small text">제목과 내용은 수정이 가능합니다</div>
      </H2Title>

      {data.length > 0 && <ViewTable data={data} key={data._id} />}
    </Container>
  );
};

export default InquiryView;
