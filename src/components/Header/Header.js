import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = ({ isAboutInView }) => {
  const history = useHistory();

  const navigate = (event) => {
    history.push(`${event.target.name}`);
  };

  const warn = () => {
    alert("영문 검수 중입니다..");
  };

  return (
    <Conatiner>
      <HeaderBox name={"/"} onClick={navigate}>
        JJH.
      </HeaderBox>
      <HeaderBox></HeaderBox>
      <HeaderBox></HeaderBox>
      <HeaderBox>
        <LanguageButton onClick={warn}>En</LanguageButton>
        <LanguageButton>Kr</LanguageButton>
      </HeaderBox>
      <Navigation>
        <NavButton name={"about"} onClick={navigate}>
          About
        </NavButton>
        <NavButton name={"projects"} onClick={navigate}>
          Projects
        </NavButton>
        <NavButton name={"contact"} onClick={navigate}>
          Contact
        </NavButton>
      </Navigation>
    </Conatiner>
  );
};

export { Header };

const Conatiner = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  height: 4rem;
  padding: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderBox = styled.button`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;

  font-family: "Roboto Slab", serif;
  font-size: 2.5rem;
  color: grey;
  cursor: pointer;
  /* color: ${(props) => (props.isAboutInView ? "white" : "grey")}; */
`;

const LanguageButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 0.5rem;

  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 1.5rem;
  color: grey;
  cursor: pointer;
`;

const NavButton = styled.button`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  justify-content: flex-end;
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 2rem;
  color: grey;
  cursor: pointer;
`;
