import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import UpdateModal from '../../components/auth/UpdateModal';
import AlbumDetailModal from '../../components/auth/AlbumDetailModal';
import Hero from '../../components/Hero/Hero';
import { closeModal, albumDetailModal, infoModal } from '../../modules/modal';
import { kakaoLoginReq, userInfoReq } from '../../modules/auth';
import { RiUser3Fill } from 'react-icons/ri';
import {
  MyPageWrapper,
  MyPageContent,
  MyPageInfoWrapper,
  MyPageImage,
  MyPageInfo,
  MyPageSlide,
  MyPageButton,
  ButtonWrapper,
} from '../../components/common/MyPageStyle';
import styled from 'styled-components';
import { cover } from 'polished';

const MypageItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPageForm = () => {
  const dispatch = useDispatch();
  const { checkModal, isType, info, token } = useSelector(
    ({ modal, auth, user }) => ({
      checkModal: modal.checkModal,
      isType: modal.isType,
      info: auth.info,
      token: user.token,
    }),
  );

  const [infoDefaultId, setInfoDefaultId] = useState('');
  const [infoDefaultEmail, setInfoDefaultEmail] = useState('');
  const [infoDefaultUsername, setInfoDefaultUsername] = useState('');
  const [heroListNumber, setHeroListNumber] = useState(0);
  const [customData, setCustomData] = useState([]);

  useEffect(async () => {
    if (token) {
      dispatch(userInfoReq(token)).then(async () => {
        await axios
          .get(`${process.env.REACT_APP_SERVER_URI}/customs/my-customs`, {
            headers: {
              authorization: `Bearer ${token}`,
              withCredential: true,
            },
          })
          .then((response) => {
            setCustomData(response.data.data);
          });
      });
    }
  }, [token]);

  useEffect(async () => {
    if (info !== undefined && info !== null) {
      const { id, email, username } = info.data;
      setInfoDefaultEmail({ email });
      setInfoDefaultUsername({ username });
      setInfoDefaultId({ id });
    }
  }, [info]);

  const aboutInfoModal = () => {
    dispatch(infoModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  const openDetailModal = () => {
    dispatch(albumDetailModal());
  };

  const herohandler = (data) => {
    setHeroListNumber(data);
  };

  const style = {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: 'url(./images/ccc2.png)',
  };

  return (
    <>
      <MyPageWrapper style={style}>
        <MyPageContent>
          <MyPageInfoWrapper>
            <MypageItems>
              <MyPageImage>
                <img src="/images/add.png"></img>
                <p>사진 올리기</p>
              </MyPageImage>
              <ButtonWrapper>
                <MyPageButton onClick={aboutInfoModal}>
                  내 정보 수정
                  <RiUser3Fill className="space" />
                </MyPageButton>
              </ButtonWrapper>
            </MypageItems>
            <MyPageInfo>
              <p>{infoDefaultUsername.username}님, 안녕하세요!</p>
              <p className="small">{infoDefaultEmail.email}</p>
              <p className="small">
                지금까지 {customData.length}개의 커스텀을 만들었습니다
              </p>
              <p className="very">
                아래의 슬라이더로 커스텀을 공유하고, 상세정보를 확인해보세요
              </p>
            </MyPageInfo>
          </MyPageInfoWrapper>
        </MyPageContent>

        <MyPageSlide>
          <Hero
            slides={customData}
            openModal={openDetailModal}
            herohandler={herohandler}
          />
        </MyPageSlide>
        {isType === 'detail' && (
          <AlbumDetailModal
            slides={customData}
            open={checkModal}
            close={shutModal}
            heroListNumber={heroListNumber}
          />
        )}
        {isType === 'info' && (
          <UpdateModal
            open={checkModal}
            close={shutModal}
            userId={infoDefaultId.id}
            userEmail={infoDefaultEmail.email}
            username={infoDefaultUsername.username}
          />
        )}
      </MyPageWrapper>
    </>
  );
};

export default MyPageForm;
