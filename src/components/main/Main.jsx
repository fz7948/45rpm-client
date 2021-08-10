import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Main.scss';
import Footer from '../common/Footer/Footer';
import { BsFillSkipEndFill } from 'react-icons/bs';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AlertModal from '../common/Modal/AlertModal';
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
    ['./images/19.png'],
    ['./images/23.jpg'],
    ['./images/21.jpg'],
    ['./images/28.jpg'],
    ['./images/22.png'],
    ['./images/888.jpg'],
  ];

  useEffect(() => {
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

      if (googleData) {
        axios
          .get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
            params: {
              access_token: googleData,
            },
          })
          .then((res) => {
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
    wrapperContent.style.backgroundPosition = 'center center';
    wrapperContent.style.transition = 'all linear .8s';

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
    wrapperContent.style.backgroundPosition = 'center center';
    wrapperContent.style.transition = 'all linear .8s';

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
          comment={'기본 비밀번호 : 카카오 계정 이메일'}
        ></AlertModal>
      )}
      {isSocial === 'google' && (
        <AlertModal
          openHandle={alertCheck}
          closeHandle={shutModal}
          comment={'기본 비밀번호 : 구글 계정의 이메일'}
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
                  <img src="./images/12fix.png" alt="" />
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/jj.png" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="textWrapper">
                  <h1 className="firstH1">
                    세상에 하나밖에 없는<p>당신만의 LP</p>
                  </h1>
                </div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <img src="./images/12fix.png" alt="" />
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/j.jpeg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/recustom.gif" alt="" />
                </div>
                <div className="text">나만의 LP를 제작하세요</div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <img src="./images/12fix.png" alt="" />
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/jjj.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/reMypage.gif" alt="" />
                </div>
                <div className="text1">제작한 LP를 확인하세요</div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <img src="./images/12fix.png" alt="" />
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/lll.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/reSharing.gif" alt="" />
                </div>
                <div className="text1">당신의 LP를 공유하세요</div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <img src="./images/12fix.png" alt="" />
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/kk.png" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="card">
                  <img src="./images/reOrder.gif" alt="" />
                </div>
                <div className="text1">그리고 만나보세요</div>
              </div>
            </section>
            <section className="sectionWrapper">
              <div className="cdCase">
                <div className="disk">
                  <img src="./images/12fix.png" alt="" />
                  <div className="innerDisk"> </div>
                </div>
                <div className="coverImg">
                  <img src="./images/llll.jpg" alt="" />
                </div>
              </div>
              <div className="movingImg">
                <div className="secondTextWrapper">
                  <div className="textWrapper1">
                    <h1 className="secondH1">
                      지금 바로 <p>만들어 보세요</p>
                    </h1>
                    <div
                      className="start"
                      onClick={() => history.push('/custom')}
                    >
                      시작하기
                    </div>
                    <div
                      className="share"
                      onClick={() => history.push('/sharing')}
                    >
                      공유 LP 둘러보기
                    </div>
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
