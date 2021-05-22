import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../pages/sass/Main.scss';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { BsFillSkipEndFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Main() {
  const history = useHistory();
  let prevBtn, nextBtn, skipBtn;
  let header;
  let container;
  let innerDisk;
  let pageNum = 0;
  let totalNum = 0;
  let cdCase;
  let movingImg;
  let colorArray = [
    ['#03154E', '#311788'],
    ['#03154E', '#311788'],
    ['#03154E', '#311788'],
    ['#03154E', '#311788'],
    ['#03154E', '#311788'],
  ];

  useEffect(() => {
    prevBtn = document.querySelectorAll('button')[0];
    nextBtn = document.querySelectorAll('button')[1];
    skipBtn = document.querySelectorAll('button')[2];
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

    skipBtn.addEventListener('click', function () {
      if (true) {
        pageNum = 4;
      }
      pageFunc();
      removeFunc();
    });
    pageChangeFunc();
  });

  function pageFunc() {
    container.style.background =
      'linear-gradient(120deg,' +
      colorArray[pageNum][0] +
      ',' +
      colorArray[pageNum][1] +
      ')';

    cdCase[4].classList.add('active');
    movingImg[4].classList.add('active');
    innerDisk[pageNum].style.background = colorArray[pageNum][0];
  }

  function removeFunc() {
    for (var i = 0; i < totalNum - 1; i++) {
      cdCase[i].classList.remove('active');
      movingImg[i].classList.remove('active');
    }
  }

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
        <Header />
        <div className="wrapperContent">
          <div className="sectionWrapper">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"> </div>
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
                <div className="innerDisk"> </div>
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
                <div className="innerDisk"> </div>
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
          <div className="sectionWrapper">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"> </div>
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
          <div className="sectionWrapper">
            <section className="cdCase">
              <div className="disk">
                <div className="innerDisk"> </div>
              </div>
              <div className="coverImg">
                <img src="./images/4.jpg" alt="" />
              </div>
            </section>
            <section className="movingImg">
              <div className="textWrapper">
                <h1>
                  지금 바로 <p>만들어 보세요</p>
                </h1>
                <div className="start" onClick={() => history.push('/1')}>
                  시작하기
                </div>
                <div className="share" onClick={() => history.push('/3')}>
                  공유 페이지
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
      <div className="wrapBtn">
        <div className="btn">
          <div className="fingerBtn">
            <button>
              <IoIosArrowBack />
            </button>
            <button>
              <IoIosArrowForward />
            </button>
          </div>
          <div className="skipBtn">
            <button>
              SKIP <BsFillSkipEndFill />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
