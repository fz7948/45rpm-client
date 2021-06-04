import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../common/AlbumModalStyle';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';

const InfoWrapper = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;

  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 5rem;
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
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InfoCloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  left: 29rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.1rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    top: 1rem;
    left: 23rem;
  }
`;

const ProducerLi = styled.li`
  padding-left: 1rem;
  font-weight: 500;
  margin-bottom: 30px;
  margin-left: 80px;
  .fontSize {
    font-size: 20px;
    margin: 20px 5px;
  }
`;

const TitleLi = styled.li`
  padding-left: 1rem;
  font-weight: 500;
  margin-bottom: 30px;
  margin-left: 80px;
  .fontSize {
    font-size: 20px;
    margin: 20px 5px;
  }
`;

const SongListLi = styled.li`
  padding-left: 1rem;
  margin-bottom: 30px;
  margin-left: 80px;
  .fontSize {
    font-size: 20px;
    margin: 20px 5px;
  }
`;

const SongContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 20px;
  margin: 20px 5px;

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
  padding-bottom: 1rem;
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
