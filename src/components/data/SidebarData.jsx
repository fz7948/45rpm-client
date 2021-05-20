import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';

const Sidebar = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Custom Page',
    path: '/1',
    icon: <BsIcons.BsHammer />,
    cName: 'nav-text',
  },
  {
    title: 'My page',
    path: '/mypage',
    icon: <GrIcons.GrContactInfo />,
    cName: 'nav-text',
  },
  {
    title: 'Share Page',
    path: '/3',
    icon: <GiIcons.GiShare />,
    cName: 'nav-text',
  },
  {
    title: 'Inquiries Page',
    path: '/2',
    icon: <BsIcons.BsQuestionCircle />,
    cName: 'nav-text',
  },
];

export default Sidebar;
