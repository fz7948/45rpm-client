import React from 'react';
import { useHistory } from 'react-router-dom';
import { SharingArr } from '../data/SharingData';
import Footer from '../common/Footer';
import {
  Container,
  Header,
  ContentWrapper,
  ImgWrapper,
  LeftWrapper,
  Img,
  SharingWrapper,
  ContinueBtn,
  ImgArray,
  Image,
  ButtonCollection,
  Button,
} from '../common/SharingStyle';

const Sharing = () => {
  const history = useHistory();
  const genre = ['Rock', 'Ballad', 'HipHop'];

  const filteredRock = SharingArr.filter((el) => {
    if (genre === undefined || genre.length === 0) {
      return true;
    }
    return genre[0].includes(el.genre);
  });

  const filteredBallad = SharingArr.filter((el) => {
    if (genre === undefined || genre.length === 0) {
      return true;
    }
    return genre[1].includes(el.genre);
  });

  const filteredHipHop = SharingArr.filter((el) => {
    if (genre === undefined || genre.length === 0) {
      return true;
    }
    return genre[2].includes(el.genre);
  });
  console.log(filteredBallad);
  return (
    <Container>
      <Header></Header>
      <ContentWrapper>
        <ImgWrapper>
          <Img src="./images/1.jpg" />
        </ImgWrapper>
        <LeftWrapper>
          <SharingWrapper>
            <ButtonCollection>
              <Button onClick={() => console.log(filteredRock)}>ROCK</Button>
              <Button onClick={() => filteredBallad}>BALLAD</Button>
              <Button onClick={() => filteredHipHop}>HIP HOP</Button>
            </ButtonCollection>
            <ImgArray>
              {SharingArr.map((el) => (
                <Image src={el.img} alt="" key={el.id} />
              ))}
            </ImgArray>
          </SharingWrapper>
          <ContinueBtn onClick={() => history.push('/1')}>
            계속 만들기
          </ContinueBtn>
        </LeftWrapper>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default Sharing;
