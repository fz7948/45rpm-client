import React from 'react';
import { SharingArr } from '../data/SharingData';
import Footer from '../common/Footer';
import {
  Container,
  Header,
  ContentWrapper,
  ImgWrapper,
  Img,
  SharingWrapper,
  SharingArray,
  ContinueBtn,
} from '../common/SharingStyle';

const Sharing = () => {
  return (
    <Container>
      <Header></Header>
      <ContentWrapper>
        <ImgWrapper>
          <Img></Img>
        </ImgWrapper>
        <SharingWrapper>
          <SharingArray>
            {SharingArr.map((el) => (
              <img src={el.img} key={el.id} />
            ))}
          </SharingArray>
          <ContinueBtn></ContinueBtn>
        </SharingWrapper>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default Sharing;
