import React from 'react';
import styled, { css } from 'styled-components';
import './Loading.scss';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: auto;
  padding: 0;
  font-size: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1c2629;
`;

const H1El = styled.h1`
  display: flex;
  margin: 0;
  padding: 0;
  font-family: ‘Arial Narrow’, sans-serif;
  font-weight: 100;
  font-size: 10rem;
  height: 10%;
  color: #a3e1f0;
`;

const common = css`
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  opacity: 0;
  transform: rotateX(-90deg);
  font-size: 3rem;

  @keyframes drop {
    10% {
      opacity: 0.1;
    }
    20% {
      opacity: 0.2;
      top: 1.58em;
      transform: rotateX(-360deg);
    }
    80% {
      opacity: 0.3;
      top: 1.58em;
      transform: rotateX(-360deg);
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      top: 3.94em;
    }
  }
`;

const Span1 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.2s;
  ${common}
`;
const Span2 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.3s;
  ${common}
`;
const Span3 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.4s;
  ${common}
`;
const Span4 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.5s;
  ${common}
`;
const Span5 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.6s;
  ${common}
`;
const Span6 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.7s;
  ${common}
`;
const Span7 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.8s;
  ${common}
`;
const Span8 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.9s;
  ${common}
`;
const Span9 = styled.span`
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 2s;
  ${common}
`;

const LoadingPage = () => {
  return (
    <Container>
      <div class="loader">
        <div class="dot">
          <br></br>45RPM
        </div>
        <div class="dot"></div>
      </div>
      <H1El>
        <Span1>L</Span1>
        <Span2>O</Span2>
        <Span3>A</Span3>
        <Span4>D</Span4>
        <Span5>I</Span5>
        <Span6>N</Span6>
        <Span7>G</Span7>
        <Span8>.</Span8>
        <Span9>.</Span9>
      </H1El>
    </Container>
  );
};

export default LoadingPage;
