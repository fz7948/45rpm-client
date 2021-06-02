import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import 'semantic-ui-css/semantic.min.css';
import { Tab } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import RegisterModal from '../../components/auth/RegisterModal';
import { registerModal, closeModal } from '../../modules/modal';
import styled from 'styled-components';
import {
  Container,
  MainWrapper,
  CoverImg,
  Img,
  Img2,
  LpWrapper,
  Disk,
  InnerDisk,
  SongListWrapper,
  UpperWrapper,
  CustomTitle,
  SongList,
  Song,
  InputFile,
  TextInput,
  LowerWrapper,
  LogoWrapper,
  ExtraWrapper,
  TextContent,
  DomainContent,
  TabWrapper,
  ButtonWrapper,
  SubmitBtn,
} from '../common/CustomStyle';

const Custom = () => {
  const history = useHistory();
  const [songList, setSongList] = useState(
    sessionStorage.getItem('songList') === null
      ? []
      : sessionStorage
          .getItem('songList')
          .split(',')
          .filter((el) => {
            if (el) return el;
          }),
  );
  const [color, setColor] = useState('#fff');
  const [title, setTitle] = useState(sessionStorage.getItem('title'));
  const [imgBase64, setImgBase64] = useState('./images/1.jpg');
  const [imgFile, setImgFile] = useState(null);
  const [imgBase, setImgBase] = useState('./images/1.webp');
  const [imgFile1, setImgFile1] = useState(null);
  const dispatch = useDispatch();
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));
  const { checkModal, isType } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
  }));

  const openRegisterModal = () => {
    dispatch(registerModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
  };

  const handleChangeColor = (color) => {
    setColor(color.hex);
    console.log(color.hex);
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImgFile(e.target.files[0]);
    }
  };

  const handleChangeTitle = (e) => {
    sessionStorage.setItem('title', e.target.value);
    setTitle(e.target.value);
  };

  const handleChangeSongList = (e) => {
    if (
      e.target.value.includes(',') &&
      songList.length >= 0 &&
      e.target.value !== ''
    ) {
      setSongList(
        e.target.value.split(',').filter((el) => {
          if (el) return el;
        }),
      );
      sessionStorage.setItem('songList', e.target.value);
    } else {
      sessionStorage.setItem('songList', e.target.value);
      if (sessionStorage.getItem('songList') === '') {
        setSongList([]);
      } else setSongList([sessionStorage.getItem('songList')]);
    }
    console.log('>>>>songList', songList);
  };

  const handleChangeFile1 = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setImgBase(base64.toString());
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImgFile1(e.target.files[0]);
    }
  };

  const submitHandler = async () => {
    if (!color || !imgFile || !imgFile1 || !title || !songList) {
      alert('모두 입력되어야 등록이 가능합니다.');
      return;
    } else if (!token) {
      openRegisterModal();
      return;
    } else {
      sessionStorage.removeItem('title');
      sessionStorage.removeItem('songList');
      const formData = new FormData();
      formData.append('color', color);
      formData.append('albumPic', imgFile);
      formData.append('recordPic', imgFile1);
      formData.append('title', title);
      formData.append('songList', songList);

      console.log('커스텀 토큰', token);
      for (let p of formData) {
        console.log('<<>F>D????D>>', p);
      }
      await axios.post(
        `${process.env.REACT_APP_SERVER_URI}/customs/add-custom`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        },
      );
      history.push('/mypage');
    }
  };

  const panes = [
    {
      menuItem: 'Color',
      render: () => (
        <Tab.Pane
          style={{
            border: 'none',
            height: '270px',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ChromePicker color={color} onChange={handleChangeColor} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Album Cover',
      render: () => (
        <Tab.Pane
          style={{
            border: 'none',
            height: '270px',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InputFile
            type="file"
            name="imgFile"
            id="imgFile"
            onChange={handleChangeFile}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Center Cover',
      render: () => (
        <Tab.Pane
          style={{
            border: 'none',
            height: '270px',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InputFile
            type="file"
            name="imgFile"
            id="imgFile"
            onChange={handleChangeFile1}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Title',
      render: () => (
        <Tab.Pane
          style={{
            border: 'none',
            height: '270px',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            placeholder="LP 이름을 입력하세요"
            value={sessionStorage.getItem('title')}
            onChange={handleChangeTitle}
          />
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Song List',
      render: () => (
        <Tab.Pane
          style={{
            border: 'none',
            height: '270px',
            background: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextInput
            placeholder="추가하고 싶은 음악을 입력하세요"
            value={sessionStorage.getItem('songList')}
            onChange={handleChangeSongList}
          />
        </Tab.Pane>
      ),
    },
  ];
  const Img1 = styled.img`
    position: absolute;
    left: -25%;
    width: 710px;
    height: 100%;
    -webkit-filter: opacity(0.5) drop-shadow(0 0 0 ${color});
    filter: opacity(0.5) drop-shadow(0 0 0 ${color});
  `;

  const style = {
    width: '100%',
    height: '95vh',
    backgroundImage: 'url(./images/aaa.jpg)',
    backgroundSize: 'cover',
  };

  return (
    <Container style={style}>
      <MainWrapper>
        <CoverImg>
          <Img src={imgBase64} alt="" />
        </CoverImg>
        <LpWrapper>
          <Disk>
            <Img1 style={{ color: color }} src="./images/12.png" alt=""></Img1>
            <InnerDisk>
              <Img2 src={imgBase} alt="" />
            </InnerDisk>
          </Disk>
        </LpWrapper>
        <SongListWrapper>
          <UpperWrapper>
            <CustomTitle>{title}</CustomTitle>
            <SongList>
              {songList.map((el) => {
                return <Song>{el}</Song>;
              })}
            </SongList>
          </UpperWrapper>
          <LowerWrapper>
            <LogoWrapper>45RPM</LogoWrapper>
            <ExtraWrapper>
              <TextContent>
                All rights of the phonogram producer and owner of the recorded
                work are reserved. Any duplication, rental, loan, public
                performance and radio broadcast of this sound carrier is
                prohibited.
              </TextContent>
              <DomainContent>www.45RPM.shop</DomainContent>
            </ExtraWrapper>
          </LowerWrapper>
        </SongListWrapper>
      </MainWrapper>
      <TabWrapper>
        <Tab
          menu={{
            color: 'yellow',
            fluid: true,
            tabular: true,
          }}
          panes={panes}
        />
      </TabWrapper>
      <ButtonWrapper>
        <SubmitBtn onClick={submitHandler}>Submit</SubmitBtn>
      </ButtonWrapper>
      {isType === 'register' && (
        <RegisterModal open={checkModal} close={shutModal}></RegisterModal>
      )}
    </Container>
  );
};

export default Custom;
