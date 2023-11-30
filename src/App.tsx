import './utils/firebase';
import UserContextProvider from "./provider/Profile";
import Header from "./modules/Header";
import Body from "./modules/Body";
import Footer from "./modules/Footer";
import styled from "styled-components";
import grunge1 from "./assets/images/grunge1.svg"
import grunge2 from "./assets/images/grunge2.svg"
import rectangle from "./assets/images/rectangle.png"
import line1 from "./assets/images/line1.png"
import line2 from "./assets/images/line2.png"
import line3 from "./assets/images/line3.png"
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Background>
        <BackgroundGrunge />
        <Wrapper>
          <img className='line1' src={line1} alt="line" />
          <img className='line2' src={line2} alt="line" />
          <img className='line3' src={line3} alt="line" />
          <UserContextProvider>
            <img className='rectangle' src={rectangle} alt="rectangle" />
            <Header />
            <Body />
            <Footer />
          </UserContextProvider>
        </Wrapper>
      </Background >
    </HelmetProvider>
  );
}

const Background = styled.div`
  background-color: #e0e0e0;
  position: relative;
  overflow-x: hidden;
  `

const BackgroundGrunge = styled.div`
  background-image: url(${grunge1}), url(${grunge2});
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    position: relative;

    .rectangle,
    .line1,
    .line2,
    .line3{
      position: absolute;
    }

    .rectangle{
        position: absolute;
        width: 185px;
        left: -50px;
        top: 50%  ;
        rotate: 90deg;
    }

    .line1{
      width: 300px;
      top: 150px;
      left: -280px;
    }

    .line2{
      width:  600px;
      top: 100px;
      right: -450px;
    }

    .line3{
      width:  250px;
      bottom: 20px;
      right: 10%
    }
    
  `

export default App;
