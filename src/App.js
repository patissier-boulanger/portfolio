import "./App.css";
import { Switch, Route } from "react-router-dom";

import { GlobalStyle } from "../src/styles/GlobalStyle";

import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Header } from "./components/Header/Header";
import { Details } from "./components/Details/Details";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Header />
          <Intro />
          <About />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </>
  );
}

export default App;
