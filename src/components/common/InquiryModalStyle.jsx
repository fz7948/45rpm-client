import styled, { keyframes, css } from 'styled-components';

export const fadeIn = keyframes`
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
`;

export const fadeOut = keyframes`
  from{
    opacity: 1
  }
  to{
    opacity: 0
  }
`;

export const slideUp = keyframes`
  from{
    transform: translateY(20px);
  }
  to{
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from{
    transform: translateY(0px);
  }
  to{
    transform: translateY(20px);
  }
`;

export const ModalBack = styled.div`
  position: fixed;
  z-index: 101;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  .modal_outsider {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 90%;
  background: white;
  padding: 1.5rem;
  border-radius: 5px;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
    font-size: 1.125rem;
  }

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
  ${(props) =>
    props.register &&
    css`
      width: 450px;
      height: 500px;
    `}

    @media screen and (max-width:768px) {
    width: 25rem;
  }
`;
