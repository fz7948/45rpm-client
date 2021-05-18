import React, { useState } from 'react';
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
} from './CustomStyle';
const Custom = () => {
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);

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
                <Button
                  onClick={() =>
                    setShowColorPicker((showColorPicker) => !showColorPicker)
                  }
                >
                  {/* {showColorPicker ? "Close color picker" : "Pick a color"} */}
                </Button>
                <CustomColor>
                  Color
                  {showColorPicker && (
                    <ChromePicker color={color} onChange={handleChangeColor} />
                  )}
                </CustomColor>
                <CustomAlbumCover>AlbumCover</CustomAlbumCover>
                <CustomCenterCover>CenterCover</CustomCenterCover>
              </CustomElement>
              <SaveBtn>Save</SaveBtn>
            </CustomContent>
          </SectionWrapper>
        </MainContentWrapper>
        <Footer />
      </Container>
    </>
  );
};

export default Custom;
