import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inquiryModal, closeModal } from '../../modules/modal';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ReactHtmlParser from 'react-html-parser';
import InquiryModal from '../auth/InquiryModal';
import { InquiryDataList } from '../data/InquiryData';
import {
  Container,
  InquiryWrapper,
  InquiryContainer,
  InquiryTitle,
  InquiryContent,
  Content,
  Button,
  Title,
  InnerContent,
  QuestIcon,
  TextWrapper,
} from '../common/InquiryStyle';

const Inquires = () => {
  //   const [viewContent, setViewContent] = useState([]);
  // 나중에 요청 받아서 뿌려 줄 데이터
  //   // viewContent
  //   useEffect(() => {
  //     axios.get('httpP://localhost:5000/').then((res) => {
  //       setViewContent(res.data);
  //     });
  //   }, [viewContent]);

  const { checkModal, isType } = useSelector(({ modal }) => ({
    checkModal: modal.checkModal,
    isType: modal.isType,
  }));
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(inquiryModal());
  };
  const shutModal = () => {
    dispatch(closeModal());
  };

  const onSubmitHand = (data) => {};
  return (
    <Container>
      <Header />
      <InquiryWrapper>
        <InquiryContainer>
          <InquiryTitle>문의 내역</InquiryTitle>
          <InquiryContent>
            <Content>
              {InquiryDataList.map((el) => (
                <Title>
                  <TextWrapper>
                    <h2>{el.title}</h2>
                    <InnerContent>{ReactHtmlParser(el.content)}</InnerContent>
                  </TextWrapper>
                  <QuestIcon />
                </Title>
              ))}
            </Content>
          </InquiryContent>
        </InquiryContainer>
        <Button onClick={openModal}>글쓰기</Button>
        {isType === 'inquiry' && (
          <InquiryModal
            open={checkModal}
            close={shutModal}
            onSubmitHand={onSubmitHand}
          ></InquiryModal>
        )}
      </InquiryWrapper>
      <Footer />
    </Container>
  );
};

export default Inquires;
