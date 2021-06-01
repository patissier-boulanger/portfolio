import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyle } from "../src/styles/GlobalStyle";

import { Intro } from "./components/Intro/Intro";

import { Details } from "./components/Details/Details";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
