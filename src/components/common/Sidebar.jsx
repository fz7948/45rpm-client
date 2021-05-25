import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../data/SidebarData';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const NavSidebar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  left: 0;
  top: 0;
  background: black;
  padding: 5px;

  .menu-bars {
    cursor: pointer;
    margin-left: 12rem;
    font-size: 2rem;
    background: none;
    color: #e8e8e8;
    &:hover {
      color: #07111e;
    }
  }
`;

const SideLogoutBtn = styled.div`
  display: flex;
  width: 225px;
  justify-content: flex-end;
  padding-bottom: 2rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    width: 13rem;
    height: 2rem;
    margin-left: 1.5rem;
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
  .menu-close {
    cursor: pointer;
    margin-left: 12rem;
    font-size: 2rem;
    background: none;
    color: black;
    &:hover {
      color: lightgray;
    }
  }

  .nav-menu {
    background-color: #fff;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 9;
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
    alert('로그아웃 됐다');
    dispatch(logoutUser(token));
    console.log('토큰뜨냐', token);
    history.push('/');
    showSidebar();
  };

  return (
    <SidebarWrapper>
      <NavSidebar>
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
  );
};

export default withRouter(Navbar);
