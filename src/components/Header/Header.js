import styled from "styled-components";

const Header = () => {
  return (
    <Conatiner>
      <Font></Font>
      <Font>contact</Font>
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
`;

const Font = styled.span`
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 1.2rem;
  font-family: "Roboto Mono", monospace;
  /* font-weight: 900; */
  font-size: 1.2rem;
  color: grey;

  border-bottom: 1.5px solid grey;
`;
