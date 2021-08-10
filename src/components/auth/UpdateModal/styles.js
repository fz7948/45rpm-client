import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #191919;
    font-weight: 700;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  ul {
    padding: 0;
  }
  li {
    position: relative;
    list-style: none;
    margin-bottom: 1rem;
  }
  p {
    font-size: 15px;
    font-weight: 600;
    color: #707174;
    margin: 0;
    margin-bottom: 5px;
  }
  .update_info {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }
  .deny-message {
    width: 280px;
    height: 20px;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    color: ${palette.mainRed};
    word-break: keep-all;
  }
`;

export const UpdateLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #707174;
  div {
    margin-bottom: 8px;
  }
`;

export const UpdateInput = styled.input`
  height: 1.6rem;
  width: 21rem;
  padding: 1.4rem;

  border: 1px solid #9b9b9c;
  border-radius: 3px;
  font-size: 15.5px;
  color: #5f6063;
  &:focus {
    outline: none;
    border: 1px solid #313899;
    transition: all ease 0.3s;
  }
`;

export const UpdateCloseBtn = styled.button`
  cursor: pointer;
  position: relative;
  top: 1rem;
  left: 20rem;
  background: white;
  border: 0;
  outline: 0;
  font-weight: 700;
  font-size: 2.4rem;
  &:hover {
    color: ${palette.mainRed};
    transition: all ease 0.2s;
  }
`;

export const UpdateSubmitBtn = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 21rem;
  border-radius: 3px;
  border: 0;
  outline: 0;
  margin-bottom: 0.7rem;
  background-color: ${palette.main};
  color: #fff;
  font-size: 1.1rem;
  font-weight: 400;
  &:hover {
    background-color: ${palette.mainHover};
    transition: all ease 0.3s;
  }
`;

export const WithdrawBtn = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 20px;
  margin-top: 5px;
  button {
    border: 0;
    cursor: pointer;
    font-size: 1.25rem;
    background: white;
    padding: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;
