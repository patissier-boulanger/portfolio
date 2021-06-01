import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Conatiner>
      <Font></Font>
      <Link to="/details">
        <Font>Get Started</Font>
      </Link>
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
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Font = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 0.3rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  color: grey;

  border-bottom: 1.5px solid grey;
`;
