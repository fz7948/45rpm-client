import React, { useState, useEffect } from 'react';
import { ModalBack, ModalBox } from '../common/ModalStyle';
import styled from 'styled-components';

const InfoWrapper = styled.div`
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
  font-size: 12px;
  font-weight: 600;
  color: #707174;
  margin: 0;
  margin-bottom: 4px;
`;

const InfoCloseBtn = styled.button`
  position: relative;
  top: -1rem;
  left: 12.5rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 1rem;
  &:hover {
    color: #f73d5c;
    transition: all ease 0.2s;
  }
`;

const AlbumDetailModal = ({ open, close, onSubmitHand }) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(open);

  useEffect(() => {
    if (localVisible && !open) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(open);
  }, [localVisible, open]);

  if (!animate && !localVisible) return null;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHand();
  };

  return (
    <>
      <ModalBack disappear={!open}>
        <div className="modal_outsider" onClick={close}></div>
        <ModalBox disappear={!open}>
          <form onSubmit={onSubmitHandler}>
            <InfoCloseBtn onClick={close}>X</InfoCloseBtn>
            <InfoWrapper>
              <h2>앨범 정보</h2>
              <ul>
                <li>
                  <InfoLabel>
                    <div>Producer</div>
                  </InfoLabel>
                  <div>LEE SEUNG JAE</div>
                </li>
                <li>
                  <InfoLabel>
                    <div>Genre</div>
                  </InfoLabel>
                  <div>ROCK</div>
                </li>
                <li>
                  <InfoLabel>
                    <div>Title</div>
                  </InfoLabel>
                  <div>Lonely Night</div>
                </li>
                <li>
                  <InfoLabel>
                    <div>Song List</div>
                  </InfoLabel>
                  <div>IU....</div>
                </li>
              </ul>
            </InfoWrapper>
          </form>
        </ModalBox>
      </ModalBack>
    </>
  );
};

export default AlbumDetailModal;
