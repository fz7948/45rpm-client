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
    title: '내 정보',
    path: '/myPage',
    icon: <GrIcons.GrContactInfo />,
    cName: 'nav-text',
  },
  {
    title: '커스텀 만들기',
    path: '/custom',
    icon: <BsIcons.BsHammer />,
    cName: 'nav-text',
  },

  {
    title: '공유 LP 둘러보기',
    path: '/sharing',
    icon: <GiIcons.GiShare />,
    cName: 'nav-text',
  },
  {
    title: '주문 하기',
    path: '/order',
    icon: <AiIcons.AiOutlineShoppingCart />,
    cName: 'nav-text',
  },
  {
    title: '문의 하기',
    path: '/inquiry',
    icon: <BsIcons.BsQuestionCircle />,
    cName: 'nav-text',
  },
];

export default Sidebar;
