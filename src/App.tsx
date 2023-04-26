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
  `

const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
  `

export default App;
