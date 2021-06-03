import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 94.5vh;
  overflow: auto;
  background: #000;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 500px;
  @media screen and (max-width: 1400px) {
    height: 900px;
  }
`;

export const InputFile = styled.input`
  color: #fff;
  width: 350px;
  height: 150px;
  font-size: 20px;
  padding-top: 4.5rem;
  padding-left: 4.5rem;
  border-radius: 6px;
  background: #424242;
  opacity: 0.8;
  cursor: pointer;

  @media screen and (max-width: 1400px) {
    width: 300px;
    height: 150px;
    font-size: 15px;
    padding-top: 4.5rem;
    padding-left: 4rem;
  }
`;

export const CoverImg = styled.div`
  width: 400px;
  height: 400px;
  margin: auto 0;
  margin-left: 70px;
  display: flex;
  justify-content: flex-end;
  box-shadow: 1px 3px 3px 5px rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 1400px) {
    z-index: 2;
    width: 350px;
    height: 350px;
    transform: translateX(-80%);
  }
`;

export const Img = styled.img`
  width: 400px;
  height: 400px;

  @media screen and (max-width: 1400px) {
    width: 350px;
    height: 350px;
  }
`;

export const LpWrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
  padding-top: 1rem;

  @media screen and (max-width: 1400px) {
    z-index: 1;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 10%;
    transform: translateX(-40%);
  }
`;

export const Disk = styled.div`
  position: relative;
  width: 405px;
  height: 405px;
  left: 16%;
  top: 10%;
  border-radius: 50%;
  animation: rotation 10s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 1400px) {
    position: absolute;
    width: 300px;
    height: 300px;
  }
`;

export const InnerDisk = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  border-radius: 50%;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }

  @media screen and (max-width: 1400px) {
    width: 100px;
    height: 100px;
  }
`;

export const Img2 = styled.img`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;

  @media screen and (max-width: 1400px) {
    width: 100px;
    height: 100px;
  }
`;

export const SongListWrapper = styled.div`
  border-radius: 6px;
  width: 400px;
  height: 400px;
  margin: auto 0;

  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  color: #000;
  background: #fff;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
  @media screen and (max-width: 1400px) {
    position: absolute;
    top: 11.6%;
    width: 350px;
    height: 350px;
    transform: translateX(85%);
    &:hover {
      transform: translateX(120px);
      transition: all linear 0.5s;
      z-index: 3;
    }
  }
`;

export const UpperWrapper = styled.div`
  padding: 1rem;
  padding-left: 1.3rem;
  flex: 2.5;
`;

export const CustomTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 40px;
  font-weight: 800;
  font-family: 'Do Hyeon', sans-serif;
  font-style: italic;

  @media screen and (max-width: 1400px) {
    font-size: 30px;
  }
`;

export const TextInput = styled.input`
  type: text;
  font-size: 1.5rem;
  padding: 4rem;
  width: 350px;
  height: 150px;
  border: none;
  border-radius: 6px;
  background: #424242;
  opacity: 0.8;
  text-align: center;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;

export const SongListTextInput = styled.input`
  font-size: 1.3rem;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 6px;
  background: #424242;
  opacity: 0.8;
  text-align: center;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
`;

export const SongListBtn = styled.button`
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 4px;
  margin-left: 1rem;
  margin-top: 1rem;
  outline: 0;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  background-color: #4c4c4c;
  color: #ddd;
  font-size: 2rem;
  &:hover {
    background-color: #d4d4d4;
    color: #4c4c4c;
    transition: all ease 0.4s;
  }
  .space {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 1400px) {
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1rem;
  }
`;

export const SongList = styled.ul`
  padding: 1rem;
  list-style: none;
  line-height: 13px;
  font-family: 'Do Hyeon', sans-serif;

  @media screen and (max-width: 1400px) {
    line-height: 10px;
    font-size: 8px;
  }
`;

export const Song = styled.li`
  padding: 0.5rem;
  font-size: 25px;
  line-height: 20px;

  @media screen and (max-width: 1400px) {
    line-height: 10px;
    font-size: 15px;
  }
`;

export const LowerWrapper = styled.div`
  flex: 1;
  display: flex;
  padding-right: 1rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 25%;
  font-family: 'Syncopate', sans-serif;
  font-style: italic;
  font-size: 20px;
  padding-top: 1.5rem;
  padding-left: 1rem;
`;

export const ExtraWrapper = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
`;

export const TextContent = styled.div`
  flex-wrap: nowrap;
  flex: 2;
  padding-left: 1rem;
  line-height: 15px;
  font-size: 10px;

  @media screen and (max-width: 1400px) {
    font-size: 10px;
    line-height: 10px;
  }
`;

export const DomainContent = styled.div`
  font-size: 0.6rem;
  flex: 1;
  padding-left: 1rem;
  font-family: 'Syncopate', sans-serif;

  @media screen and (max-width: 1400px) {
    font-size: 0.6rem;
  }
`;

export const TabWrapper = styled.div`
  height: 700px;
  background: black;
  opacity: 0.75;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
  background: black;
  opacity: 0.75;

  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: center;
  }
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 2rem;
  font-family: 'Fjalla One', sans-serif;

  @media screen and (max-width: 1400px) {
    width: 130px;
    height: 40px;
    font-size: 1.5rem;
  }
`;
