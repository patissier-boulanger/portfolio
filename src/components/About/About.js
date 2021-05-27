import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Font>Hello! Welcome to my page</Font>
      <Font>My name is</Font>
      <BigFont>Juhyoung Jung</BigFont>
      <Circle />
      <BigFont>To be a front end developper/</BigFont>
    </Container>
  );
};

export { About };

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10rem;
  min-height: 100vh;
  background: radial-gradient(#292929 0.7px, transparent 1px),
    radial-gradient(#292929 0.7px, transparent 1px), #292929; //#4dd0e1;
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px;
`;

const Font = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: lighter;
  font-size: 2rem;
  text-align: center;
  color: white;
`;

const BigFont = styled.span`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 9rem;
  text-align: center;
  color: white;
`;

const Circle = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  background-color: #4dd0e1; //#ff69b4;
`;
