import "./App.css";
import { GlobalStyle } from "../src/styles/GlobalStyle";

import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <Intro />
      <About />
    </>
  );
}

export default App;
