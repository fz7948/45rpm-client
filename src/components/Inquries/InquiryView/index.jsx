import React, { useState, useEffect } from 'react';
import ViewTable from '../ViewTable/index';
import { useSelector } from 'react-redux';
import { Container, H2Title } from './styles';

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
