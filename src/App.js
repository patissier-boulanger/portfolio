import "./App.css";
import { GlobalStyle } from "../src/styles/GlobalStyle";

import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Intro />
      <About />
    </>
  );
}

export default App;
