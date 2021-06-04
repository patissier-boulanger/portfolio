import styled from "styled-components";

const End = () => {
  return (
    <Container>
      <BigFont>Contact</BigFont>
      <MediumFont>juhyoung.jung1992@gmail.com</MediumFont>
      <MediumFont>+82 010 7166 6895</MediumFont>
    </Container>
  );
};

export { End };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 13rem;
  min-height: 100vh;

  background: #ff69b4;
`;

const MediumFont = styled.span`
  /* margin-top: -1rem; */
  font-family: "Roboto Mono", monospace;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;

  color: #292929;
`;

const CenterFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
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

const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 30rem;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 10px solid #292929;
  margin-bottom: 5rem;
`;

const Blank = styled.div`
  height: 2rem;
`;
