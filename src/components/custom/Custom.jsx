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
} from '../common/CustomStyle';
import { customAddReq } from '../../modules/custom';
const Custom = () => {
  const history = useHistory();
  const [imgBase64, setImgBase64] = useState('./images/1.jpg');
  const [imgFile, setImgFile] = useState(null);
  const [imgBase, setImgBase] = useState('./images/1.webp');
  const [imgFile1, setImgFile1] = useState(null);
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

  const dispatch = useDispatch();
  const { checkModal, isType, token } = useSelector(({ modal, user }) => ({
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

  const submitHandler = () => {
    if (!color || !imgFile || !imgFile1) {
      alert('모두 입력되어야 등록이 가능합니다.');
      return;
    } else if (!token) {
      openRegisterModal();
      return;
    }
    const formData = new FormData();
    formData.append('color', color);
    formData.append('albumPic', imgFile);
    formData.append('recordPic', imgFile1);

    console.log('커스텀 토큰', token);
    console.log('커스텀 폼데이터', formData);
    dispatch(customAddReq(token, formData));

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
