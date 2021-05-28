import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabPanel } from 'react-tabs';
import axios from 'axios';
import RegisterModal from '../../components/auth/RegisterModal';
import { registerModal, closeModal } from '../../modules/modal';
import {
  Container,
  MainContentWrapper,
  SectionWrapper,
  CdCaseContent,
  Disk,
  InnerDisk,
  CoverImg,
  Img,
  Img1,
  CustomContent,
  CustomElement,
  CustomColor,
  CustomAlbumCover,
  CustomCenterCover,
  SaveBtn,
  InputFile,
  TextInput,
  CustomTitleCover,
  CustomSongListCover,
  Wrapper,
} from '../common/CustomStyle';

const Custom = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const [imgBase64, setImgBase64] = useState('./images/1.jpg');
  const [imgFile, setImgFile] = useState(null);
  const [imgBase, setImgBase] = useState('./images/1.webp');
  const [imgFile1, setImgFile1] = useState(null);
  const [color, setColor] = useState('#fff');
  const [title, setTitle] = useState('');
  const [songList, setSongList] = useState([]);
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));
  const { checkModal, isType } = useSelector(({ modal, user }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
    token: user.token,
  }));

  const openRegisterModal = () => {
    dispatch(registerModal());
  };

  const shutModal = () => {
    dispatch(closeModal());
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

  const handleChangeColor = (color) => {
    setColor(color.hex);
    console.log(color.hex);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeSongList = (e) => {
    setSongList(...songList, [e.target.value]);
  };

  const submitHandler = async () => {
    if (!color || !imgFile || !imgFile1 || !title || !songList) {
      alert('모두 입력되어야 등록이 가능합니다.');
      return;
    } else if (!token) {
      openRegisterModal();
      return;
    } else {
      const formData = new FormData();
      formData.append('color', color);
      formData.append('albumPic', imgFile);
      formData.append('recordPic', imgFile1);
      formData.append('title', title);
      formData.append('songList', songList);

      console.log('커스텀 토큰', token);
      for (let p of formData) {
        console.log(p);
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

  return (
    <>
      <Container>
        <MainContentWrapper>
          <SectionWrapper>
            <CdCaseContent>
              <CoverImg>
                <Img src={imgBase64} alt="" />
              </CoverImg>
              <Disk style={{ background: color }}>
                <InnerDisk>
                  <Img1 src={imgBase} alt="" />
                </InnerDisk>
              </Disk>
            </CdCaseContent>
            <CustomContent>
              <CustomElement>
                <h2>Custom List</h2>
                <Tabs
                  selectedIndex={index}
                  onSelect={(index) => setIndex(index)}
                >
                  <Wrapper>
                    <Tab style={{ border: '1px solid black' }}>
                      <span>Color</span>
                    </Tab>
                    <Tab>
                      <span>AlbumCover</span>
                    </Tab>
                    <Tab>
                      <span>CenterCover</span>
                    </Tab>
                    <Tab>
                      <span>Title</span>
                    </Tab>
                    <Tab>
                      <span>SongList</span>
                    </Tab>
                  </Wrapper>
                  <TabPanel>
                    <CustomColor>
                      <ChromePicker
                        color={color}
                        onChange={handleChangeColor}
                      />
                    </CustomColor>
                  </TabPanel>
                  <TabPanel>
                    <CustomAlbumCover>
                      <InputFile
                        type="file"
                        name="imgFile"
                        id="imgFile"
                        onChange={handleChangeFile}
                      />
                    </CustomAlbumCover>
                  </TabPanel>
                  <TabPanel>
                    <CustomCenterCover>
                      <InputFile
                        type="file"
                        name="imgFile"
                        id="imgFile"
                        onChange={handleChangeFile1}
                      />
                    </CustomCenterCover>
                  </TabPanel>
                  <TabPanel>
                    <CustomTitleCover>
                      <TextInput
                        placeholder="LP 이름을 입력하세요"
                        onChange={handleChangeTitle}
                      />
                    </CustomTitleCover>
                  </TabPanel>
                  <TabPanel>
                    <CustomSongListCover>
                      <TextInput
                        placeHolder="추가하고 싶은 음악을 입력하세요"
                        onChange={handleChangeSongList}
                      />
                    </CustomSongListCover>
                  </TabPanel>
                </Tabs>
              </CustomElement>
              <SaveBtn onClick={submitHandler}>Save</SaveBtn>
            </CustomContent>
          </SectionWrapper>
        </MainContentWrapper>
      </Container>
      {isType === 'register' && (
        <RegisterModal open={checkModal} close={shutModal}></RegisterModal>
      )}
    </>
  );
};

export default Custom;
