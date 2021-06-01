import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../common/AlbumModalStyle';
import styled from 'styled-components';
import DragDrop from '../DragAndDrop/DragAndDrop';

const InfoWrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;

  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
  }
  ul {
    padding: 0;
  }
`;

const InfoLabel = styled.label`
  font-size: 2rem;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 4px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InfoCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: 1rem;
  left: 9.5rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1.2rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    top: 1rem;
    left: 9.5rem;
  }
`;

const ProducerLi = styled.li`
  padding-left: 3rem;
  font-weight: 500;
`;

const TitleLi = styled.li`
  padding-left: 3rem;
  font-weight: 500;
`;

const SongListLi = styled.li`
  padding-left: 3rem;
  @media screen and (max-width: 768px) {
  }
`;

const SongContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SongTitle = styled.div`
  position: relative;
  bottom: 13px;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  word-break: keep-all;
  paddingbottom: '1rem';
`;

const UlComp = styled.ul`
  list-style: none;
`;

export const Button = styled.button`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 35%;
  font-size: 15px;
  font-family: 'Jua', sans-serif;
  background-color: #eee;
  border: 1px solid #fff;
  border-radius: 6px;
  outline: 0;
  cursor: pointer;
  width: 120px;
  height: 40px;
  &:hover {
    background-color: #ddd;
    transition: all ease 0.4s;
  }
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
    font-size: 1rem;
    left: 38%;
  }
`;

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
        <ModalBox disappear={!open}>
          <InfoCloseBtn onClick={close}> X </InfoCloseBtn>
          <InfoWrapper key={heroListNumber}>
            <>
              <h2> 앨범 정보 </h2>
              <UlComp>
                <ProducerLi>
                  <InfoLabel>
                    <div> Producer </div>
                  </InfoLabel>
                  <div> {slide.userId} </div>
                </ProducerLi>
                <TitleLi>
                  <InfoLabel>
                    <div> Title </div>
                  </InfoLabel>
                  <div> {slide.title} </div>
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
