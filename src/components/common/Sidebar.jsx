import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../data/SidebarData';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  .navbar {
    padding-right: 1rem;
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
    justify-content: center;
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
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
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
      </nav>
    </SidebarWrapper>
  );
};

export default Navbar;
