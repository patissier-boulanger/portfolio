import styled from "styled-components";
import { SiNotion, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <Container>
      <BigFont>Contact</BigFont>
      <MediumFont>juhyoung.jung1992@gmail.com</MediumFont>
      <MediumFont>Mobile +82 010 7166 6895</MediumFont>
      <IconWrapper>
        <Link
          to={{
            pathname:
              "https://www.notion.so/Web-Dev-62d236b844964e6dbcbfc19f4ce6068e",
          }}
          target="_blank"
        >
          <SiNotion size={70} />
        </Link>
        <Link
          to={{
            pathname: "https://github.com/patissier-boulanger",
          }}
          target="_blank"
        >
          <SiGithub size={70} />
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/juhyoung-jung-b57206214/",
          }}
          target="_blank"
        >
          <SiLinkedin size={70} />
        </Link>
      </IconWrapper>
    </Container>
  );
};

export { ContactSection };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 13rem;
  min-height: 100vh;

  background: #0f0f0f;
`;

const MediumFont = styled.span`
  /* margin-top: -1rem; */
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 3rem;
  text-align: center;

  color: #fff;
`;

const LightFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 3rem;
  text-align: center;

  color: #fff;
`;

const BigFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 12.3rem;
  text-align: center;

  color: #fff;
  z-index: 1;
`;

const IconWrapper = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  width: 30%;
`;
