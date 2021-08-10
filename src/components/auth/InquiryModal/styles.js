import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const InquiryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 340px;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 2.6rem;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    margin-bottom: 0.8rem;
  }
`;

export const InquiryTitle = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: #707174;
  margin: 1rem 0rem;
  margin-bottom: 4px;
  .space {
    margin-bottom: 0.3rem;
    z-index: 0;
  }
  .spaceGory {
    z-index: 10;
    margin-bottom: 0.3rem;
  }
`;

export const InquiryInput = styled.input`
  height: 1.2rem;
  width: 100%;
  padding: 1.4rem;
  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 1.3rem;
  color: #5f6063;
  margin-top: 0.3rem;
  &:focus {
    outline: none;
    border: 1px solid ${palette.mainRed};
    transition: all ease 0.3s;
  }
`;

export const InquiryCloseBtn = styled.button`
  position: fixed;
  top: 1rem;
  left: 47rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.1rem;
  cursor: pointer;
  &:hover {
    color: ${palette.mainRed};
    transition: all ease 0.2s;
  }
  @media screen and (max-width: 768px) {
    top: 1rem;
    left: 33rem;
  }
`;

export const InquiryContent = styled.div`
  width: 150%;
  display: flex;
  flex-direction: column;
  margin-top: 0.3rem;
  .goryList {
    z-index: 10;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InquirySubmitBtn = styled.button`
  height: 3rem;
  width: 36.5rem;

  border-radius: 3px;
  border: 0;
  outline: 0;
  margin: 1.5rem 0rem 0rem 0rem;
  background-color: ${palette.main};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
  }
  @media screen and (max-width: 768px) {
    width: 24.5rem;
  }
`;
