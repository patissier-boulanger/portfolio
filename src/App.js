import React, { Suspense, useState, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyle } from "../src/styles/GlobalStyle";
import { Intro } from "./components/Intro/Intro";
import { Header } from "./components/Header/Header";
// import { About } from "./components/About/About";
// import { Projects } from "./components/Projects/Projects";
// import { Contact } from "./components/Contact/Contact";

import "./App.css";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const App = () => {
  const [page, setCurrentPage] = useState({ currentPage: null });
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={null}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <Intro />
            </Route>
            <Route path="/about">
              <About changeCurrentPage={setCurrentPage} />
            </Route>
            <Route path="/projects">
              <Projects changeCurrentPage={setCurrentPage} />
            </Route>
            <Route path="/contact">
              <Contact changeCurrentPage={setCurrentPage} />
            </Route>
          </Switch>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default App;
