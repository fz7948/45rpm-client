import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
} from '../common/HeroStyle';

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
  }, []);

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
    console.log('shareStateHandler');
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
                <HeroSlider onClick={herohandlerIndex}>
                  <HeroImage>
                    <img
                      src={`${process.env.REACT_APP_SERVER_URI}/${slide.albumPic}`}
                    />
                  </HeroImage>
                  <HeroContent>
                    <h1>{`Producer : ${slide.userId}`}</h1>
                    <p>{`LP Name : ${slide.title}`}</p>
                    {slide.songList.length !== 1 ? (
                      slide.songList.map((songname) => {
                        return (
                          <p>{`${
                            slide.songList.indexOf(songname) + 1
                          }. ${songname}`}</p>
                        );
                      })
                    ) : (
                      <p>{slide.songList}</p>
                    )}
                    {slide.share === true ? (
                      <span>
                        <input
                          type="checkbox"
                          checked={slide.share}
                          onClick={() => shareStateHandler(slide._id)}
                        />{' '}
                        공유해제
                      </span>
                    ) : (
                      <span>
                        <input
                          type="checkbox"
                          checked={slide.share}
                          onClick={() => shareStateHandler(slide._id)}
                        />{' '}
                        공유하기
                      </span>
                    )}
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}

        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
