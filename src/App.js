import "./App.css";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { GlobalStyle } from "../src/styles/GlobalStyle";
import { Intro } from "./components/Intro/Intro";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { useEffect, useState } from "react";

function App() {
  const [page, setCurrentPage] = useState({ currentPage: null });
  const [element, isAboutInView] = useInView({
    threshold: 1,
  });

  const func = () => {
    let count = 0;
    count++;
    console.log(count);
  };
  // 단순히 렌더링 후에 사이드 이펙트를 실행하기 위해서?

  func();
  console.log(page);

  useEffect(() => {
    //switch문으로 스테이트 변경하면 될듯.

    if (isAboutInView) {
      setCurrentPage({ currentPage: "about" });
    } else {
      setCurrentPage({ currentPage: "no" });
    }
  }, [isAboutInView]);

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
