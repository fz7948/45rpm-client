import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { useHistory } from 'react-router-dom';
import { SharingArr } from '../data/SharingData';
import Footer from '../common/Footer';
import {
  Container,
  ContentWrapper,
  ImgWrapper,
  LeftWrapper,
  Img,
  SharingWrapper,
  ContinueBtn,
  ImgArray,
  Image,
} from '../common/SharingStyle';

const Sharing = () => {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <ContentWrapper>
        <ImgWrapper>
          <Img src="./images/1.jpg" />
        </ImgWrapper>
        <LeftWrapper>
          <SharingWrapper>
            <ImgArray>
              {SharingArr.map((el) => (
                <Image src={el.img} alt="" key={el.id} />
              ))}
            </ImgArray>
          </SharingWrapper>
          <ContinueBtn onClick={() => history.push('/1')}>
            계속 만들기
          </ContinueBtn>
        </LeftWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Sharing;
