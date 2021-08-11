import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineLink, AiOutlineDisconnect } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroContent,
  HeroImage,
  SliderButtons,
  PrevArrow,
  NextArrow,
  Arrow,
  Button,
} from './styles';

const Hero = ({ slides, openModal, herohandler }) => {
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);
  const [albumPic, setAlbumPic] = useState([]);
  const [customData, setCustomData] = useState([]);

  const herohandlerIndex = () => {
    openModal();
    herohandler(current);
  };

  useEffect(async () => {
    return await axios
      .get(`${process.env.REACT_APP_SERVER_URI}/customs/my-customs`, {
        headers: { authorization: `Bearer ${token}`, withCredential: true },
      })
      .then((response) => {
        setCustomData(response.data.data);
      })
      .then(async () => {
        for (let i = 0; i < customData.length; i++) {
          await axios
            .get(`${process.env.REACT_APP_SERVER_URI}/customs/getalbumphoto`, {
              headers: {
                authorization: `Bearer ${token}`,
                withCredential: true,
              },
            })
            .then((response) => {
              setAlbumPic([...albumPic, response.data.data[0].albumPic]);
            });
        }
      });
  }, [slides]);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const shareStateHandler = async function (data) {
    await axios
      .patch(
        `${process.env.REACT_APP_SERVER_URI}/customs/share-custom`,
        { data },
        {
          headers: { authorization: `Bearer ${token}`, withCredential: true },
        },
      )
      .then(async () => {
        return await axios
          .get(`${process.env.REACT_APP_SERVER_URI}/customs/my-customs`, {
            headers: { authorization: `Bearer ${token}`, withCredential: true },
          })
          .then((response) => {
            setCustomData(response.data.data);
          });
      });
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {customData.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage style={{ zIndex: 5 }}>
                    <img
                      src={`${process.env.REACT_APP_SERVER_URI}/${slide.albumPic}`}
                      alt=""
                    />
                  </HeroImage>
                  <HeroContent>
                    {slide.share === true ? (
                      <span
                        checked={slide.share}
                        style={{
                          fontSize: '40px',
                          paddingTop: '10px',
                          width: '10%',
                        }}
                        onClick={() => shareStateHandler(slide._id)}
                      >
                        <AiOutlineDisconnect
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </span>
                    ) : (
                      <span
                        checked={slide.share}
                        style={{
                          fontSize: '40px',
                          paddingTop: '10px',
                          width: '10%',
                        }}
                        onClick={() => shareStateHandler(slide._id)}
                      >
                        <AiOutlineLink
                          style={{ width: '100%', cursor: 'pointer' }}
                        />
                      </span>
                    )}
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <Arrow>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </Arrow>
          <Button onClick={() => herohandlerIndex()}>SEE DETAIL</Button>
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
