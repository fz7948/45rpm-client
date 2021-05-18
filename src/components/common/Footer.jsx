import React from 'react';
import '../../pages/sass/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="remainder">
        <div className="team">Black Circle</div>
        <div className="member">
          <div className="gitImg">
            Member
            <img src="./images/2.png" alt="" />
          </div>

          <div className="memberTitle">
            <a className="class1" href="https://github.com/tyufjvbn2">
              Park J.H
            </a>
            <a className="class2" href="https://github.com/dodo9128">
              Lee J.Y
            </a>
            <a className="class3" href="https://github.com/fz7948">
              O W.Y
            </a>
            <a className="class4" href="https://github.com/DLSKAGHD">
              Lee S.J
            </a>
          </div>
        </div>
      </div>
      <div className="sns">
        <img src="./images/kakao.png" alt="" />
        <div className="copyright"> ©Copyright All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
