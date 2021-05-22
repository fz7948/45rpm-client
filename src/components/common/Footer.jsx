import React from 'react';
import '../../pages/sass/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="remainder">
        <div className="member">
          <div className="gitWrapper">
            <div className="gitImg">
              <img src="./images/github.png" alt="" />
            </div>
            <div className="memberTitle">
              <a className="class1" href="https://github.com/tyufjvbn2">
                박종혁
              </a>
              <a className="class2" href="https://github.com/dodo9128">
                오우영
              </a>
              <a className="class3" href="https://github.com/fz7948">
                이재윤
              </a>
              <a className="class4" href="https://github.com/DLSKAGHD">
                이성재
              </a>
            </div>
          </div>
          <div className="sns">
            <div className="copyright"> Copyright© 2021 45RPM</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
