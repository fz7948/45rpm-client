import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../modules/user';
import { withRouter } from 'react-router-dom';
import { alertLogoutModal } from '../../../modules/modal';
import { resetLoginMsg, resetLogin } from '../../../modules/auth';
import { SideLogoutBtn, SidebarWrapper, NavSidebar } from './styles';
const Sidebar = ({ history }) => {
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
    dispatch(resetLogin());
    history.push('/');
    showSidebar();
  };

  return (
    <>
      <SidebarWrapper>
        <NavSidebar>
          <div className="logo" onClick={() => history.push('/')}>
            45 RPM
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
            {SidebarData.map((item, index) => {
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
            <div onClick={onLogout}> 로그아웃 </div>
          </SideLogoutBtn>
        </nav>
      </SidebarWrapper>
    </>
  );
};

export default withRouter(Sidebar);
