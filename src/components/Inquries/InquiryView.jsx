import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getInquiryByNo } from '../data/InquiryData';
import ViewTable from './ViewTable';

const InquiryView = ({ match }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    padding-top: 2rem;
    color: #000;

    ${'' /* background: linear-gradient(120deg, #03154e, #311788); */}
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
  const [data, setData] = useState({});
  const { id } = match.params;

  useEffect(() => {
    setData(getInquiryByNo(id));
  }, [data]);

  return (
    <Container>
      <H2Title> 문의 상세정보 </H2Title> <ViewTable data={data} />
    </Container>
  );
};

export default InquiryView;
