import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../../common/Modal/AlbumModalStyle';
import { GrFormClose } from 'react-icons/gr';
import {
  InfoCloseBtn,
  InfoLabel,
  InfoWrappers,
  ProducerLi,
  TitleLi,
  SongContainer,
  SongListLi,
  SongTitle,
  InfoWrapper,
  UlComp,
} from './styles';

const AlbumDetailModal = ({ open, close, slides, heroListNumber }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  useEffect(() => {
    setSlide(slides[heroListNumber]);
  }, []);

  if (!animate && !localVisible) return null;

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={close}></div>
        <ModalBox disappear={!open} album>
          <InfoCloseBtn onClick={close}>
            <GrFormClose />
          </InfoCloseBtn>
          <InfoWrapper key={heroListNumber}>
            <>
              <h2> 앨범 정보 </h2>
              <UlComp>
                <ProducerLi>
                  <InfoLabel>
                    <div> Producer </div>
                  </InfoLabel>
                  <div className="fontSize"> {slide.userId} </div>
                </ProducerLi>
                <TitleLi>
                  <InfoLabel>
                    <div> Title </div>
                  </InfoLabel>
                  <div className="fontSize"> {slide.title} </div>
                </TitleLi>
                <SongListLi>
                  <InfoLabel>
                    <div
                      style={{
                        paddingBottom: '1rem',
                      }}
                    >
                      Song List
                    </div>
                  </InfoLabel>
                  <SongContainer>
                    {slide.songList !== undefined ? (
                      slide.songList.map((songTitle, index) => {
                        return (
                          <SongTitle>{`${index + 1}. ${songTitle}`}</SongTitle>
                        );
                      })
                    ) : (
                      <SongTitle>Loading</SongTitle>
                    )}
                  </SongContainer>
                </SongListLi>
              </UlComp>
            </>
          </InfoWrapper>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default AlbumDetailModal;
