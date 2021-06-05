import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ handleOnclick }) => {
  return (
    <Conatiner>
      <Font onClick={handleOnclick}>About</Font>
      <Font onClick={handleOnclick}>Projects</Font>
      <Font onClick={handleOnclick}>Contact</Font>
    </Conatiner>
  );
};

export { Header };

const Conatiner = styled.div`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  height: 4rem;
  padding: 1rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
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
