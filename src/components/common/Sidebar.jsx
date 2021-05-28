import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../data/SidebarData';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../modules/user';
import { withRouter } from 'react-router-dom';
import { alertLogoutModal } from '../../modules/modal';
import { resetLoginMsg } from '../../modules/auth';

const NavSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  background: black;
  padding: 5px 10px 5px 0px;

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

const SideLogoutBtn = styled.div`
  display: flex;
  width: 225px;
  justify-content: flex-end;
  padding-bottom: 30px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    width: 300px;
    height: 34px;
    margin: 0px 15px;
    background-color: #fff;
    border: 1px solid #03154e;
    outline: 0;
    color: #03154e;
    &:hover {
      cursor: pointer;
      background-color: #03154e;
      border: 0;
      outline: 0;
      color: #fff;
      transition: all ease 0.2s;
    }
  }
`;

const SidebarWrapper = styled.div`
  .logo {
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 35px;
    font-size: 25px;
    font-family: 'Syncopate', sans-serif;
    &:hover {
      color: gray;
      transition: all 0.2s ease-in-out;
    }
    @media #{$small} {
      font-size: 18px;
    }
  }

  .menu-close {
    margin-top: -25px;
    cursor: pointer;
    margin-left: 188px;
    font-size: 30px;
    color: black;
    &:hover {
      color: #f74848;
      transition: all 0.15s ease-in-out;
    }
  }

  .nav-menu {
    background-color: #fff;
    width: 230px;
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
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #444;
    font-size: 18px;
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

const Navbar = ({ history }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ user }) => ({
    token: user.token,
  }));

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const onLogout = () => {
    dispatch(logoutUser(token));
    dispatch(resetLoginMsg());
    dispatch(alertLogoutModal());
    history.push('/');
    showSidebar();
  };

  return (
    <>
      <SidebarWrapper>
        <NavSidebar>
          <div className="logo" onClick={() => history.push('/')}>
            45RPM
          </div>
          <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
        </NavSidebar>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <div className="menu-close">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </div>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={showSidebar}>
                    {item.icon} <span> {item.title} </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <SideLogoutBtn>
            <div onClick={onLogout}>로그아웃</div>
          </SideLogoutBtn>
        </nav>
      </SidebarWrapper>
    </>
  );
};

export default withRouter(Navbar);
