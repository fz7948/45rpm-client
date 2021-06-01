import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeModal, albumDetailModal } from '../../modules/modal';
import axios from 'axios';
import AlbumDetailModal from '../../components/auth/AlbumDetailModal';

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
  const dispatch = useDispatch();
  const { checkModal, isType } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
  }));
  const [sharedData, setSharedData] = useState([]);
  const [sharedListNumber, setSharedListNumber] = useState(0);

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
        console.log(response);
        setSharedData(response.data.data);
        console.log(sharedData);
      });
  }, []);

  const shutModal = () => {
    dispatch(closeModal());
  };

  // const openDetailModal = function () {
  //   dispatch(albumDetailModal());
  // };

  // const modalOpen = async function (data) {
  //   setSharedListNumber(data);
  //   await openDetailModal();
  // };

  return (
    <Container style={sectionStyle}>
      <TitleWrapper>
        <H1Title>세상에 하나밖에 없는 당신만의 LP</H1Title>
        <SubTitle>
          3억 명의 회원이 45RPM의 커스텀 LP를 소유하고 있습니다
        </SubTitle>
      </TitleWrapper>
      <ContentWrapper>
        {sharedData.map((el) => {
          return (
            <CdCaseContent
              key={el.title}
              slides={el}
              // onClick={() => modalOpen(sharedData.indexOf(el))}
            >
              <CoverImg>
                <Img
                  src={`${process.env.REACT_APP_SERVER_URI}/${el.albumPic}`}
                />
              </CoverImg>
              <Disk style={{ background: el.color }}>
                <InnerDisk>
                  <Img1
                    src={`${process.env.REACT_APP_SERVER_URI}/${el.recordPic}`}
                  />
                </InnerDisk>
              </Disk>
            </CdCaseContent>
          );
        })}
        {/* {isType === 'detail' && (
          <AlbumDetailModal
            slides={sharedData}
            open={checkModal}
            close={shutModal}
            heroListNumber={sharedListNumber}
          />
        )} */}
      </ContentWrapper>
      <ContinueBtn>
        <Button onClick={() => history.push('/1')}>계속 만들기 </Button>
      </ContinueBtn>
    </Container>
  );
};

export default Sharing;
