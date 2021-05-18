import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { albumCoverImg } from "./data/albumCover";
// import { centerCoverImg } from "./data/centerCover";
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
  CustomContent,
  CustomElement,
  CustomColor,
  CustomAlbumCover,
  CustomCenterCover,
  SaveBtn,
  Button,
  InputFile,
} from './CustomStyle';
const Custom = () => {
  const history = useHistory();
  const [imgBase64, setImgBase64] = useState('');
  const [imgFile, setImgFile] = useState(null);
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

  const handleChangeColor = (color) => {
    setColor(color.hex);
  };

  return (
    <>
      <Container>
        <Header />
        <MainContentWrapper>
          <SectionWrapper>
            <CdCaseContent>
              <CoverImg>
                <Img src="./images/1.jpg" />
              </CoverImg>
              <Disk style={{ color: color }}>
                <InnerDisk></InnerDisk>
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
                    onChange={handleChangeFile}
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
