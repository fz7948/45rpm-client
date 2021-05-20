import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ReactHtmlParser from 'react-html-parser';
import { InquiryDataList } from '../data/InquiryData';
import {
  Container,
  InquiryWrapper,
  InquiryContainer,
  InquiryTitle,
  InquiryContent,
  Content,
  Button,
  Title,
  InnerContent,
  QuestIcon,
  TextWrapper,
} from '../common/InquiryStyle';

const Inquires = () => {
  return (
    <Container>
      <Header />
      <InquiryWrapper>
        <InquiryContainer>
          <InquiryTitle>문의 내역</InquiryTitle>
          <InquiryContent>
            <Content>
              {InquiryDataList.map((el) => (
                <Title>
                  <TextWrapper>
                    <h2>{el.title}</h2>
                    <InnerContent>{ReactHtmlParser(el.content)}</InnerContent>
                  </TextWrapper>
                  <QuestIcon />
                </Title>
              ))}
            </Content>
          </InquiryContent>
        </InquiryContainer>
        <Button>글쓰기</Button>
      </InquiryWrapper>
      <Footer />
    </Container>
  );
};

export default Inquires;
