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
  li {
    list-style: none;
    margin-bottom: 0.5rem;
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
  position: relative;
  top: 1rem;
  left: 50rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    top: 1rem;
    left: 29rem;
  }
`;

const SongContainer = styled.div`
  width: 100%;
`;

const AlbumDetailModal = ({ open, close, slides, heroListNumber }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  if (!animate && !localVisible) return null;
  console.log('슬라이드!', slides);

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={close}></div>
        <ModalBox disappear={!open}>
          <InfoCloseBtn onClick={close}> X </InfoCloseBtn>
          {slides.map((slide, index) => {
            return (
              <InfoWrapper key={index}>
                {index === heroListNumber && (
                  <>
                    <h2> 앨범 정보 </h2>
                    <ul>
                      <li>
                        <InfoLabel>
                          <div> Producer </div>
                        </InfoLabel>
                        <div> {slide.producer} </div>
                      </li>
                      <li>
                        <InfoLabel>
                          <div> Genre </div>
                        </InfoLabel>
                        <div> {slide.genre} </div>
                      </li>
                      <li>
                        <InfoLabel>
                          <div> Title </div>
                        </InfoLabel>
                        <div> {slide.song} </div>
                      </li>
                      <li>
                        <InfoLabel>
                          <div> Song List </div>
                        </InfoLabel>
                        <SongContainer>
                          <DragDrop />
                        </SongContainer>
                      </li>
                    </ul>
                  </>
                )}
              </InfoWrapper>
            );
          })}
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default AlbumDetailModal;
