import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

export const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 5;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2.5rem;
  padding-top: 3rem;
  border: 1px solid ${palette.mainBorder};
  background-color: #fafafa;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0rem;
    padding-left: 2rem;
    padding-bottom: 1rem;
    width: 90%;
    height: 100%;
  }
`;

export const InquiryCollection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
    padding-left: 0;
    margin-right: 2rem;
  }
`;

export const InquiryRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 65%;
  padding-bottom: 0.5rem;
  background-color: white;
  border: 1px solid ${palette.mainBorder};

  label {
    &:nth-child(1) {
      width: 15rem;
      height: 100%;
      font-family: 'Noto Sans KR', sans-serif;
      font-weight: 700;
      color: ${palette.sideBack};
      padding-top: 0.4rem;
      margin-right: 2rem;
      background: #495263;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 4px;
      ${(props) =>
        props.replyReady &&
        css`
          background-color: #d3d3d3;
        `}
      ${(props) =>
        props.replyConfirm &&
        css`
          background-color: ${palette.mainRed};
        `}
    }
  }

  @media screen and (max-width: 768px) {
    border-bottom: 0.7px solid lightgray;
    padding-bottom: 0.5rem;
    margin-right: 1rem;
    label {
      &:nth-child(1) {
        width: 150px;
        text-align: center;
        margin-right: 2rem;
      }
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

export const common = css`
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 5rem 2rem 1rem 2rem;
  background-color: ${palette.mainHover};
  color: #e1eaf8;
  font-size: 1rem;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
    color: gray;
  }
`;

export const ButtonWrap = styled.button`
  ${common}
  width:10rem;
  height: 3rem;

  @media screen and (max-width: 768px) {
    width: 9rem;
    height: 3rem;
    font-size: 1rem;
  }
`;

export const InputDetailStyle = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  margin-top: 7px;
  outline: none;
  padding-left: 8px;
  border: 0px;
  box-sizing: border-box;
  width: 67%;
  height: 2.1rem;
  font-size: 1.1rem;
  &:focus {
    outline: 0;
    background-color: #efefef;
    transition: all ease 0.3s;
    border-radius: 3px;
  }
  ${(props) =>
    props.date &&
    css`
      font-size: 1.02rem;
    `}
`;

export const InputDetailText = styled.textarea`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  margin-top: 7px;
  outline: none;
  padding-left: 10px;
  border: 0px;
  box-sizing: border-box;
  font-size: 1.1rem;
  padding-top: 10px;
  resize: none;
  width: 67%;
  height: 12rem;
  &:focus {
    outline: 0;
    background-color: #efefef;
    transition: all ease 0.3s;
    border-radius: 3px;
  }
  ${(props) =>
    props.ready &&
    css`
      height: 2.5rem;
    `}

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const DivDetailText = styled.div`
  overflow: auto;
  height: 12rem;
  word-break: break-all;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  margin-top: 7px;
  outline: none;
  padding-left: 8px;
  border: 0px;
  box-sizing: border-box;
  width: 67%;
  font-size: 1.1rem;
  &:focus {
    outline: 0;
    background-color: #efefef;
    transition: all ease 0.3s;
    border-radius: 3px;
  }
`;
