import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../../pages/sass/Main.scss';
import Footer from '../common/Footer';
import { BsFillSkipEndFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AlertModal from '../../components/common/AlertModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../modules/modal';
import axios from 'axios';
import { googleLoginReq } from '../../modules/auth';

function Main() {
  const dispatch = useDispatch();
  const { isType, alertCheck, isSocial } = useSelector(({ modal, auth }) => ({
    isType: modal.isType,
    alertCheck: modal.alertCheck,
    isSocial: auth.isSocial,
  }));

  const shutModal = () => {
    dispatch(closeModal());
  };

  const history = useHistory();
  let prevBtn, nextBtn, skipBtn;
  let header;
  let wrapperContent;
  let innerDisk;
  let pageNum = 0;
  let totalNum = 0;
  let cdCase;
  let movingImg;
  let colorArray = [
    ['./images/1111.jpg'],
    ['./images/a.jpg'],
    ['./images/1111.jpg'],
    ['./images/555.jpg'],
    ['./images/888.jpg'],
    ['./images/888.jpg'],
  ];

  useEffect(() => {
    console.log('이펙트 실행 시작');

    prevBtn = document.querySelectorAll('button')[0];
    nextBtn = document.querySelectorAll('button')[1];
    skipBtn = document.querySelectorAll('button')[2];
    wrapperContent = document.querySelector('.wrapperContent');
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
        pageNum = 5;
      }
      pageFunc();
      removeFunc();
    });
    pageChangeFunc();

    if (window.location.hash !== '') {
      const googleData = window.location.hash.split('&')[1].split('=')[1];
      // const googleData = decodeURIComponent(window.location.hash).split('&');
      console.log('구글구글', googleData);

      if (googleData) {
        axios
          .get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
            params: {
              access_token: googleData,
            },
          })
          .then((res) => {
            console.log('요청 결과물', res.data);

            dispatch(googleLoginReq(res.data));
          })
          .then(() => {
            history.push('/');
          });
      }
      return;
    }
  });

  function pageFunc() {
    wrapperContent.style.background = 'url(' + colorArray[pageNum][0] + ')';
    wrapperContent.style.background = 'opacity:0.6';
    wrapperContent.style.backgroundSize = 'cover';
    wrapperContent.style.backgroundRepeat = 'no-repeat';

    cdCase[5].classList.add('active');
    movingImg[5].classList.add('active');
    innerDisk[pageNum].style.background = colorArray[pageNum][0];
  }

  function removeFunc() {
    for (var i = 0; i < totalNum - 1; i++) {
      cdCase[i].classList.remove('active');
      movingImg[i].classList.remove('active');
    }
  }

  function pageChangeFunc() {
    wrapperContent.style.background = 'url(' + colorArray[pageNum][0] + ')';
    wrapperContent.style.background = 'opacity:0.6';
    wrapperContent.style.backgroundSize = 'cover';
    wrapperContent.style.backgroundRepeat = 'no-repeat';

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
      {isSocial === 'kakao' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'기본 비밀번호는 카카오 계정의 이메일 주소입니다'}
        ></AlertModal>
      )}
      {isSocial === 'google' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'기본 비밀번호는 구글 계정의 이메일 주소입니다'}
        ></AlertModal>
      )}
      {isType === 'alertRegister' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'회원가입이 완료되었습니다.'}
        />
      )}
      {isType === 'alertLogin' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'로그인이 완료되었습니다.'}
        />
      )}
      {isType === 'alertLogout' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'로그아웃이 완료되었습니다.'}
        />
      )}
      {isType === 'alertUpdate' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'정보 수정이 완료되었습니다.'}
        />
      )}
      {isType === 'alertWithdrawal' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'회원 탈퇴가 완료되었습니다.'}
        />
      )}
      <div className="container">
        <article className="wrapperContent">
          <div className="mainWrapper">
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/4.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="textWrapper">
                  <h1>
                    지금 바로 <p>만들어 보세요</p>
                  </h1>
                </div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/1.webp" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/c.gif" alt="" />
                </div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/1.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/e.gif" alt="" />
                </div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/2.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/c.gif" alt="" />
                </div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/3.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/e.gif" alt="" />
                </div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/4.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
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
              </div>
            </section>
          </div>
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
        </article>
      </div>
      <Footer />
    </>
  );
}

export default Main;
