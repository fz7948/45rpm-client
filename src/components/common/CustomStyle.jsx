import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 93.2vh;
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
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 500px;
`;

export const InputFile = styled.input`
  color: #fff;
  width: 500px;
  height: 150px;
  font-size: 20px;
  padding-top: 4rem;
  padding-left: 10rem;
  border: 0.5px solid #fff;
  border-radius: 6px;
  cursor: pointer;
`;

export const CoverImg = styled.div`
  flex-basis: 33.3%;
  width: 400px;
  height: 400px;
  margin: auto 0;
  padding-left: 6rem;
`;

export const Img = styled.img`
  width: 400px;
  height: 400px;
`;

export const LpWrapper = styled.div`
  flex-basis: 33.3%;
  width: 500px;
  height: 500px;
  margin: auto;
  padding-top: 1rem;
`;

export const Disk = styled.div`
  position: relative;
  width: 470px;
  height: 470px;
  left: 2%;
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
`;

export const Img2 = styled.img`
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
`;

export const SongListWrapper = styled.div`
  border-radius: 6px;
  flex-basis: 33.3%;
  width: 400px;
  height: 400px;
  margin: auto 0;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  flex-basis: 33.3%;
  color: #fff;
  background: #000;
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
`;

export const UpperWrapper = styled.div`
  padding: 1rem;
  padding-left: 1.3rem;
  flex: 2.5;
`;

export const CustomTitle = styled.div`
  font-size: 30px;
`;

export const TextInput = styled.input`
  type: text;
  font-size: 1.5rem;
  padding: 4rem;
  width: 500px;
  height: 150px;
  background: transparent;
  border-radius: 6px;
  border: 0.5px solid #fff;
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
  background: transparent;
  border-radius: 6px;
  border: 0.5px solid #fff;
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
  @media screen and (max-width: 768px) {
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1rem;
  }
`;

export const SongList = styled.ul`
  padding: 1rem;
  list-style: none;
`;

export const Song = styled.li`
  padding: 0.5rem;
  font-size: 15px;
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
  border: 3px solid black;
  padding-top: 1.5rem;
`;

export const ExtraWrapper = styled.div`
  flex-basis: 75%;
  display: flex;
  flex-direction: column;
`;

export const TextContent = styled.div`
  flex-wrap: wrap;
  flex: 2;
`;

export const DomainContent = styled.div`
  font-size: 1.3rem;
  flex: 1;
`;

export const TabWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.5rem;
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
`;
