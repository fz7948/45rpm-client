import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

export const NavSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  padding-top: 3rem;
  background: black;
  padding: 12px 10px 12px 0px;

  .menu-bars {
    cursor: pointer;
    font-size: 30px;
    background: none;
    color: gray;
    margin-right: 5px;
    &:hover {
      color: white;
      transition: all 0.15s ease-in-out;
    }
  }
`;

export const SideLogoutBtn = styled.div`
  display: flex;
  width: 300px;
  justify-content: flex-end;
  padding-bottom: 40px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
    width: 300px;
    height: 40px;
    margin: 0px 15px;
    background-color: #fff;
    border: 1px solid ${palette.mainHover};
    outline: 0;
    color: ${palette.mainHover};
    &:hover {
      cursor: pointer;
      background-color: ${palette.mainHover};
      border: 0;
      outline: 0;
      color: #fff;
      transition: all ease 0.2s;
    }
  }
`;

export const SidebarWrapper = styled.div`
  .logo {
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 3rem;
    font-size: 25px;
    font-family: 'Syncopate', sans-serif;
    &:hover {
      color: gray;
      transition: all 0.2s ease-in-out;
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
      padding-left: 1rem;
    }
  }

  .menu-close {
    margin-top: -15px;
    cursor: pointer;
    margin-left: 255px;
    font-size: 30px;
    color: black;
    &:hover {
      color: ${palette.mainRed};
      transition: all 0.15s ease-in-out;
    }
  }

  .nav-menu {
    background-color: #fff;
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    right: -100%;
    transition: 850ms;
  }

  .nav-menu.active {
    right: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 70px;
  }

  .nav-text a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    width: 95%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    &:hover {
      color: lightgray;
    }
  }

  .nav-menu-items {
    width: 100%;
    height: 80%;
  }

  .navbar-toggle {
    background-color: #fff;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;
