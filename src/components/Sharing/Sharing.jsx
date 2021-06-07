import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
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
  const [sharedData, setSharedData] = useState([]);

  const sectionStyle = {
    width: '100%',
    height: '100vh',
    backgroundImage: 'url(./images/shareBag.jpg)',
    backgroundSize: 'cover',
  };

  useEffect(async () => {
    return await axios
      .get(`${process.env.REACT_APP_SERVER_URI}/customs/shared`)
      .then((response) => {
        setSharedData(response.data.data);
      });
  }, []);

  const Img2 = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-filter: opacity(0.5) drop-shadow(0 0 0 ${sharedData.color});
    filter: opacity(0.5) drop-shadow(0 0 0 ${sharedData.color});

    @media screen and (max-width: 1000px) {
      width: 100%;
      height: 100%;
    }
    @media screen and (min-width: 1000px) and (max-width: 1300px) {
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <Container style={sectionStyle}>
      <TitleWrapper>
        <H1Title>
          Keep your Music <p>On your space</p>
        </H1Title>
        <SubTitle>
          12533명의 회원이 45RPM의 커스텀 LP를 소유하고 있습니다
        </SubTitle>
      </TitleWrapper>
      <ContentWrapper>
        {sharedData.map((el) => {
          return (
            <CdCaseContent key={el._id} slides={el}>
              <CoverImg>
                <Img
                  src={`${process.env.REACT_APP_SERVER_URI}/${el.albumPic}`}
                />
              </CoverImg>
              <Disk>
                <Img2
                  src="./images/12fix.png"
                  alt=""
                  style={{ color: el.color }}
                />
                <InnerDisk>
                  <Img1
                    src={`${process.env.REACT_APP_SERVER_URI}/${el.recordPic}`}
                  />
                </InnerDisk>
              </Disk>
            </CdCaseContent>
          );
        })}
      </ContentWrapper>

      <ContinueBtn>
        <Button onClick={() => history.push('/custom')}>계속 만들기</Button>
      </ContinueBtn>
    </Container>
  );
};

export default Sharing;
