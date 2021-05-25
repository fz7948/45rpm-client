import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
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
  Button,
  InputFile,
  TextInput,
  CustomTitleCover,
  CustomSongListCover,
} from '../common/CustomStyle';
const Custom = () => {
  const history = useHistory();
  const [imgBase64, setImgBase64] = useState('./images/1.jpg');
  const [imgFile, setImgFile] = useState(null);
  const [imgBase, setImgBase] = useState('./images/1.webp');
  const [imgFile1, setImgFile1] = useState(null);
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [title, setTitle] = useState('');
  const [songList, setSongList] = useState([]);
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));
  const { checkModal, isType, isLogin } = useSelector(({ modal, user }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
    isLogin: user.isLogin,
  }));
  const dispatch = useDispatch();

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
    setSongList([e.target.value]);
  };

  const submitHandler = async () => {
    if (!color || !imgFile || !imgFile1 || !title || !songList) {
      alert('모두 입력되어야 등록이 가능합니다.');
      return;
    } else if (!token) {
      openRegisterModal();
    }

    const formData = new FormData();
    formData.append('color', color);
    formData.append('albumPic', imgFile);
    formData.append('recordPic', imgFile1);
    formData.append('title', title);
    formData.append('songList', songList);

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
                <CustomColor>
                  Color
                  <Button
                    onClick={() =>
                      setShowColorPicker((showColorPicker) => !showColorPicker)
                    }
                  >
                    {showColorPicker ? 'CLOSE' : 'CHOOSE COLOR'}
                  </Button>
                  {showColorPicker && (
                    <ChromePicker color={color} onChange={handleChangeColor} />
                  )}
                </CustomColor>
                <CustomAlbumCover>
                  AlbumCover
                  <InputFile
                    type="file"
                    name="imgFile"
                    id="imgFile"
                    onChange={handleChangeFile}
                  />
                </CustomAlbumCover>
                <CustomCenterCover>
                  CenterCover
                  <InputFile
                    type="file"
                    name="imgFile"
                    id="imgFile"
                    onChange={handleChangeFile1}
                  />
                </CustomCenterCover>
                <CustomTitleCover>
                  Title
                  <TextInput
                    placeholder="LP 이름을 입력하세요"
                    onChange={handleChangeTitle}
                  />
                </CustomTitleCover>
                <CustomSongListCover>
                  SongList
                  <TextInput
                    placeHolder="추가하고 싶은 음악을 입력하세요"
                    onChange={handleChangeSongList}
                  />
                </CustomSongListCover>
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
