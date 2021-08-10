import styled from 'styled-components';

export const MainOrderList = styled.div`
  height: 10vh;
  font-size: 23px;
  position: relative;
  right: 68px;
  top: 35px;
  width: 300px;
  padding: 10px 0px 0px 30px;
  color: #939393;
  cursor: pointer;
  transform: rotate(-90deg);
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
  }
  @media screen and (max-width: 1000px) {
  }
`;

export const MainOrderUnList = styled.div`
  height: 10vh;
  font-size: 23px;
  position: relative;
  right: 68px;
  top: 8px;
  width: 300px;
  padding: 10px 0px 0px 30px;
  color: #939393;
  cursor: pointer;
  transform: rotate(-90deg);
  &:hover {
    color: #e0dede;
  }
`;

export const Base = styled.div`
  background: #495263;
  display: inline-block;
  height: 300px;
  margin-left: 350px;
  margin-top: -400px;
  margin-bottom: -300px;
  position: relative;
  width: 100px;
  z-index: 10;
  transform: rotate(90deg);
  &:before {
    border-bottom: 36px solid #495263;
    border-left: 51px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  @media screen and (min-width: 1000px) and (max-width: 1350px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const UnBase = styled.div`
  background: #f8f8f8;
  display: inline-block;
  height: 270px;
  margin-left: 100px;
  margin-top: -20px;
  position: relative;
  left: 90px;
  top: 15px;
  width: 100px;
  transform: rotate(90deg);

  &:before {
    border-bottom: 35px solid #f8f8f8;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    content: '';
    height: 0;
    left: 0;
    position: absolute;
    top: -35px;
    width: 0;
  }
  @media screen and (min-width: 1000px) and (max-width: 1350px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
