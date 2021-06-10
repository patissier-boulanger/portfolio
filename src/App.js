import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { GlobalStyle } from "../src/styles/GlobalStyle";
import { Intro } from "./components/Intro/Intro";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { useState } from "react";

const App = () => {
  const [page, setCurrentPage] = useState({ currentPage: null });
  // console.log("current page is", page);

  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/about">
            <About changeCurrentPage={setCurrentPage} />
          </Route>
          <Route path="/details">
            <About changeCurrentPage={setCurrentPage} />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
