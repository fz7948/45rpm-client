import React from 'react';
import '../../pages/sass/Main.scss';

function Main() {
  let prevBtn, nextBtn;
  let header;
  let container;
  let innerDisk;
  let pageNum = 0;
  let totalNum = 0;
  let cdCase;
  let movingImg;
  let colorArray = [
    ['#8BE6FC', '#310D52'],
    ['#96A5AD', '#36595b'],
    ['#e58e82', '#6f569f'],
    ['#CE9A9C', '#6f569f'],
  ];

  window.onload = function () {
    prevBtn = document.querySelectorAll('button')[0];
    nextBtn = document.querySelectorAll('button')[1];
    container = document.querySelector('.container');
    innerDisk = document.querySelectorAll('.innerDisk');
    cdCase = document.querySelectorAll('.cdCase');
    movingImg = document.querySelectorAll('.movingImg');
    header = document.querySelector('.header');
    totalNum = cdCase.length;

    prevBtn.addEventListener('click', function () {
      if (pageNum > 0) {
        pageNum--;
      } else {
        pageNum = totalNum - 1;
      }
      pageChangeFunc();
    });

    nextBtn.addEventListener('click', function () {
      if (pageNum < totalNum - 1) {
        pageNum++;
      } else {
        pageNum = 0;
      }
      pageChangeFunc();
    });
    pageChangeFunc();
  };

  function pageChangeFunc() {
    container.style.background =
      'linear-gradient(120deg,' +
      colorArray[pageNum][0] +
      ',' +
      colorArray[pageNum][1] +
      ')';

    for (var i = 0; i < totalNum; i++) {
      if (pageNum === i) {
        cdCase[i].classList.add('active');
        movingImg[i].classList.add('active');
      } else {
        cdCase[i].classList.remove('active');
        movingImg[i].classList.remove('active');
      }
    }
    innerDisk[pageNum].style.background = colorArray[pageNum][0];
  }
  return (
    <>
      <article className="container">
        <header className="header">
          <div className="signIn">Sign In</div>
          <div className="signUp">Sign Up</div>
        </header>
        <div className="wrapperContent">
          <div className="sectionWrapper">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"></div>
              </div>
              <div className="coverImg">
                <img src="./images/1.webp" alt="" />
              </div>
            </section>
            <section className="movingImg">
              <div className="card">
                <img src="./images/um1.webp" alt="" />
              </div>
            </section>
          </div>
          <div className="sectionWrapper">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"></div>
              </div>
              <div className="coverImg">
                <img src="./images/1.jpg" alt="" />
              </div>
            </section>
            <section className="movingImg">
              <div className="card">
                <img src="./images/um2.gif" alt="" />
              </div>
            </section>
          </div>
          <div className="sectionWrapper">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"></div>
              </div>
              <div className="coverImg">
                <img src="./images/2.jpg" alt="" />
              </div>
            </section>
            <section className="movingImg">
              <div className="card">
                <img src="./images/um3.gif" alt="" />
              </div>
            </section>
          </div>
          <div className="sectionWrapper page4">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"></div>
              </div>
              <div className="coverImg">
                <img src="./images/3.jpg" alt="" />
              </div>
            </section>
            <section className="movingImg">
              <div className="card">
                <img src="./images/um4.gif" alt="" />
              </div>
            </section>
          </div>
        </div>
      </article>
      <div className="wrapBtn">
        <div className="btn">
          <div className="fingerBtn">
            <button>☚</button>
            <button>☛ </button>
          </div>
          <div className="skipBtn">
            <button>SKIP</button>
          </div>
        </div>
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
      </div>
    </>
  );
}

export default Main;
