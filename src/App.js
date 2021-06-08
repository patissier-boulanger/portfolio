import "./App.css";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { GlobalStyle } from "../src/styles/GlobalStyle";
import { Intro } from "./components/Intro/Intro";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";

function App() {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Intro />
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
