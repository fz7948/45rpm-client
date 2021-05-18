import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChromePicker } from 'react-color';
import Header from '../common/Header';
import Footer from '../common/Footer';
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
const Custom = () => {
  const history = useHistory();
  const [imgBase64, setImgBase64] = useState('./images/1.jpg');
  const [imgFile, setImgFile] = useState(null);
  const [imgBase, setImgBase] = useState('./images/1.webp');
  const [imgFile1, setImgFile1] = useState(null);
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

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

  return (
    <>
      <Container>
        <Header />
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
              <SaveBtn onClick={() => history.push('/')}>Save</SaveBtn>
            </CustomContent>
          </SectionWrapper>
        </MainContentWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Custom;
