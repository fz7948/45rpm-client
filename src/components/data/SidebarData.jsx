import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import * as BsIcons from 'react-icons/bs';

const Sidebar = [
  {
    title: '홈',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: '커스텀 만들기',
    path: '/1',
    icon: <BsIcons.BsHammer />,
    cName: 'nav-text',
  },
  {
    title: '내 정보',
    path: '/mypage',
    icon: <GrIcons.GrContactInfo />,
    cName: 'nav-text',
  },
  {
    title: '공유 하기',
    path: '/3',
    icon: <GiIcons.GiShare />,
    cName: 'nav-text',
  },
  {
    title: '주문 하기',
    path: '/4',
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: 'nav-text',
  },
  {
    title: '문의 하기',
    path: '/2',
    icon: <BsIcons.BsQuestionCircle />,
    cName: 'nav-text',
  },
];

export default Sidebar;
