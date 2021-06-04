import styled from "styled-components";
import bibinoImage from "../../../asset/images/bibino1.png";
import bibinoImage2 from "../../../asset/images/bibino2.png";
import spaceSimulator from "../../../asset/images/42spacesimulator.png";
import spaceSimulator2 from "../../../asset/images/42spacesimulator2.png";

const Works = () => {
  return (
    <Container>
      <Title>
        <BigFont>:Projects</BigFont>
        <LightFont>Some of my projects</LightFont>
      </Title>
      <LeftWork>
        <MediumFont>BIBINO</MediumFont>
        <ImageWraper>
          <Image src={bibinoImage} />
          <Image src={bibinoImage2} />
        </ImageWraper>
      </LeftWork>
      <Line />
      <RightWork>
        <MediumFont>42-space simulator</MediumFont>
        <ImageWraper>
          <Image src={spaceSimulator} />
        </ImageWraper>
      </RightWork>

      {/* <BigFont>:Projects</BigFont>
      <MediumFont>Some of my projects</MediumFont>
      <Wrapper>
        <LeftWork>
          <MediumFont>BIBINO</MediumFont>
          <ImageWraper>
            <Image src={bibinoImage} />
            <Image src={bibinoImage2} />
          </ImageWraper>
        </LeftWork>
        <Line></Line>
        <RightWork>
          <MediumFont>42-space simulator</MediumFont>
        </RightWork>
      </Wrapper> */}
    </Container>
  );
};

export { Works };

const Container = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column; */
  display: grid;
  min-height: 140vh;

  grid-auto-rows: minmax(5rem, 30rem);
  grid-template-areas:
    ". title title ."
    ". left . ."
    ". left right ."
    ". . right .";

  background: #f3eee8;
`;

const Title = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const MediumFont = styled.span`
  /* margin-top: -1rem; */
  font-family: "Roboto Mono", monospace;
  font-weight: 900;
  font-size: 4rem;
  text-align: center;

  color: #292929;
`;

const LightFont = styled.span`
  margin-top: -1rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 4rem;
  text-align: center;

  color: #292929;
`;

const BigFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 11.3rem;
  text-align: center;

  color: #292929;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LeftWork = styled.div`
  grid-area: left;
`;

const RightWork = styled.div`
  grid-area: right;
`;

const Line = styled.div`
  position: absolute;
  display: flex;
  top: 15%;
  left: 45%;
  width: 0.008rem;
  height: 100%;
  background-color: #a7a7a7;
`;

const Blank = styled.div`
  height: 2rem;
`;

const ImageWraper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  max-width: 30rem;
  max-height: 60rem;
`;

const Image = styled.img`
  object-fit: cover;
`;
