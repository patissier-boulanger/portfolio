import styled from "styled-components";
import { ReactComponent as JavaScriptIcon } from "../../../asset/images/javascriptIcon.svg";
import { ReactComponent as NodejsIcon } from "../../../asset/images/nodejsIcon.svg";
import { ReactComponent as ReactIcon } from "../../../asset/images/reactIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../../asset/images/mongoDBIcon.svg";

const Skills = () => {
  return (
    <Container>
      <Wrapper>
        <Texts>
          <MediumFont>:Skills</MediumFont>
          <Line />
          <BigFont>HTML / CSS</BigFont>
          <BigFont>Javascript</BigFont>
          <BigFont>React</BigFont>
          <BigFont>NodeJs</BigFont>
          <BigFont>Express</BigFont>
          <BigFont>MongoDB</BigFont>
        </Texts>
        <Description>
          <MediumFont>:interest</MediumFont>
          <Line />
          <MediumFont>I care about </MediumFont>
          <MediumFont>Readability</MediumFont>
          <MediumFont>Accessibility</MediumFont>
          <MediumFont>Reusable code</MediumFont>
          <MediumFont>Design pattern.</MediumFont>
          <Blank />
          <MediumFont>
            I'm interested in creating interactive experiences and functional
            interfaces.
          </MediumFont>
          <Blank />
          <Blank />
          <Button>
            <ButtonFont>| More</ButtonFont>
          </Button>
        </Description>
      </Wrapper>

      {/* <IconWrapper>
        <SvgWrapper>
          <JavaScriptIcon />
        </SvgWrapper>
        <SvgWrapper>
          <ReactIcon />
        </SvgWrapper>
        <SvgWrapper>
          <NodejsIcon />
        </SvgWrapper>
        <SvgWrapper>
          <MongoDBIcon />
        </SvgWrapper>
      </IconWrapper> */}
    </Container>
  );
};

export { Skills };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13rem;
  min-height: 100vh;

  background: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  min-height: 80vh;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* background: radial-gradient(#fff 0.7px, transparent 1px),
    radial-gradient(#fff 0.7px, transparent 1px), #4dd0e1; //#4dd0e1;
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px; */
`;

const Button = styled.button`
  background-color: #4dd0e1;
  width: 10rem;
  height: 8rem;
  box-shadow: 8px 8px 0px 4px #292929;
`;

const MediumFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 3rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const ButtonFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 2rem;
  text-align: left;

  color: #fff;
`;

const BigFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 8.3rem;
  text-align: left;

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
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  top: 60%;
  left: 30%;
`;

const Line = styled.div`
  width: 60%;
  border-bottom: 1px solid #292929;
  margin-bottom: 5rem;
`;

const Blank = styled.div`
  height: 2rem;
`;
