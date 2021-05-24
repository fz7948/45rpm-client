import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../data/SidebarData';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../modules/user';

const SidebarWrapper = styled.div`
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: black;
    padding: 0.8rem;
  }

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
  }

  .nav-menu {
    background-color: #fff;
    width: 250px;
    height: 100vh;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    position: fixed;
    z-index: 999;
    top: 0;
    right: -100%;
    transition: 850ms;
   
    .logoutBtn {
      display: flex;
      width: 225px;
      justify-content: flex-end;
      padding-bottom:2rem;
      button {
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
    }
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
    height:80%;
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

const Navbar = () => {
  const dispatch = useDispatch();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const onLogout = () => {
    alert('로그아웃 됐다');
    dispatch(logoutUser());
  };

  return (
    <SidebarWrapper>
      <div className="navbar">
        <FaIcons.FaBars className="menu-bars" onClick={showSidebar} />
      </div>
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
                <Link to={item.path}>
                  {item.icon} <span> {item.title} </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="logoutBtn">
          <button onClick={onLogout}>로그아웃</button>
        </div>
      </nav>
    </SidebarWrapper>
  );
};

export default Navbar;
