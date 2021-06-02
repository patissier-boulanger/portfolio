import styled from "styled-components";

const Works = () => {
  return (
    <Container>
      <BigFont>:Projects</BigFont>
      <MediumFont>Some of my projects</MediumFont>
      <Wrapper>
        <LeftWork>
          <MediumFont>BIBINO</MediumFont>
        </LeftWork>
        <Line />
        <RightWork>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
          <MediumFont>42-space simulator</MediumFont>
        </RightWork>
      </Wrapper>
    </Container>
  );
};

export { Works };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: #f3eee8;
`;

const MediumFont = styled.span`
  margin-top: -1rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;

  color: #292929;
  z-index: 1;
`;

const BigFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 15.3rem;
  text-align: center;

  color: #292929;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 80rem;
`;

const LeftWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  min-width: 50%;
  min-height: 100%;
  background-color: red;
`;

const RightWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  min-width: 50%;
  min-height: 100%;
  background-color: red;
`;

const Line = styled.div`
  display: flex;
  min-width: 0.05%;
  height: 100%;
  background-color: #d7d7d7;
`;

const Blank = styled.div`
  height: 2rem;
`;
