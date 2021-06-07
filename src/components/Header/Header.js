import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = ({ handleOnclick }) => {
  const history = useHistory();

  const navigate = () => {
    history.push("/details");
  };

  return (
    <Conatiner>
      <Logo>JJH.</Logo>
      <Navigation>
        <Font onClick={navigate}>About</Font>
        <Font onClick={navigate}>Projects</Font>
        <Font onClick={navigate}>Contact</Font>
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

const Logo = styled.span`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 3.3rem;
  font-family: "Roboto Slab", serif;
  font-size: 2.5rem;
  color: grey;
`;

const Font = styled.button`
  display: flex;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 3.3rem;
  font-family: "Roboto Mono", monospace;
  font-size: 2rem;
  color: grey;
  cursor: pointer;

  /* border-bottom: 1.5px solid grey; */
`;
