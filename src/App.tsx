import './utils/firebase';
import UserContextProvider from "./provider/Profile";
import Header from "./modules/Header";
import Body from "./modules/Body";
import Footer from "./modules/Footer";
import styled from "styled-components";

function App() {
  return (
    <Background>
      <Wrapper>
        <UserContextProvider>
          <Header />
          <Body />
          <Footer />
        </UserContextProvider>
      </Wrapper>
    </Background >
  );
}

const Background = styled.div`
  background-color: #ebf4f8;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  /* font-family: 'Forum', cursive; */
  font-size: 18px;
  overflow: auto;
  `

const Wrapper = styled.div`
    max-width: 1024px;
    width: 80%;
    margin: 0 auto;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
  `

export default App;
