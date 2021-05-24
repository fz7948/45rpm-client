import React, { useState } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import { useHistory } from 'react-router-dom';
import { SharingArr } from '../data/SharingData';

import {
  Container,
  ContentWrapper,
  TitleWrapper,
  H1Title,
  SubTitle,
  ContinueBtn,
  Button,
  CdCaseContent,
  CoverImg,
  Img,
  Disk,
  InnerDisk,
  Img1,
} from '../common/SharingStyle';

const Sharing = () => {
  const history = useHistory();
  const [color, setColor] = useState('');

  const handleChangeColor = () => {
    setColor();
  };

  return (
    <Container>
      <Header />
      <TitleWrapper>
        <H1Title>세상에 하나밖에 없는 당신만의 LP</H1Title>
        <SubTitle>
          3억 명의 회원이 45RPM의 커스텀 LP를 소유하고 있습니다
        </SubTitle>
      </TitleWrapper>
      <ContentWrapper>
        {SharingArr.map((el) => {
          return (
            <CdCaseContent key={el.id}>
              <CoverImg>
                <Img src={el.coverImage} />
              </CoverImg>
              <Disk>
                <InnerDisk>
                  <Img1 src={el.innerImage} />
                </InnerDisk>
              </Disk>
            </CdCaseContent>
          );
        })}
      </ContentWrapper>
      <ContinueBtn>
        <Button onClick={() => history.push('/1')}>계속 만들기 </Button>
      </ContinueBtn>
    </Container>
  );
};

export default Sharing;
