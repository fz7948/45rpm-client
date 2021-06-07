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
              <a
                rel="noreferrer"
                className="class1"
                href="https://github.com/tyufjvbn2"
                target="_blank"
              >
                <div className="class_font">박종혁</div>
              </a>
              <a
                rel="noreferrer"
                className="class4"
                href="https://github.com/DLSKAGHD"
                target="_blank"
              >
                <div className="class_font"> 이성재</div>
              </a>

              <a
                rel="noreferrer"
                className="class3"
                href="https://github.com/dodo9128"
                target="_blank"
              >
                <div className="class_font">이재윤</div>
              </a>
              <a
                rel="noreferrer"
                className="class2"
                href="https://github.com/fz7948"
                target="_blank"
              >
                <div className="class_font">오우영</div>
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
