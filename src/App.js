import "./App.css";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { GlobalStyle } from "../src/styles/GlobalStyle";
import { Intro } from "./components/Intro/Intro";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { useState } from "react";

function App() {
  const [page, setCurrentPage] = useState({ currentPage: null });
  const [element, isAboutInView] = useInView({
    threshold: 1,
  });

  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header isAboutInView={isAboutInView} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/about">
            <About aboutObserver={element} setCurrentPage={setCurrentPage} />
          </Route>
          <Route path="/details">
            <About />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
