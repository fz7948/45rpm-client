import React, { useState, useRef, useEffect } from 'react';
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
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const herohandlerIndex = () => {
    openModal();
    herohandler(current);
  };

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

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider onClick={herohandlerIndex}>
                  <HeroImage>
                    <img src={slide.image} alt={slide.alt} />
                  </HeroImage>
                  <HeroContent>
                    <h1>{slide.producer}</h1>
                    <p>{slide.genre}</p>
                    <p>{slide.song}</p>
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
