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
        <ImageWraper>
          <Image src={bibinoImage} />
          <Image src={bibinoImage2} />
          <MediumFont>BIBINO</MediumFont>
        </ImageWraper>
      </LeftWork>
      {/* <VerticalLine /> */}
      <RightWork>
        <ImageWraper>
          <MediumFont>42-space simulator</MediumFont>
          <Image src={spaceSimulator} />
        </ImageWraper>
      </RightWork>
    </Container>
  );
};

export { Works };

const Container = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column; */
  display: grid;
  min-height: 120vh;
  max-width: 100vw;
  /* overflow: hidden; */
  grid-auto-rows: minmax(5rem, 30rem);
  grid-template-areas:
    ". title title ."
    ". left . ."
    ". left right ."
    ". . right .";

  background: #fff;
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
  font-size: 3rem;
  text-align: center;

  color: #292929;
`;

const BigFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 12.3rem;
  text-align: center;

  color: #292929;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const LeftWork = styled.div`
  position: relative;
  grid-area: left;
`;

const RightWork = styled.div`
  position: relative;
  grid-area: right;
`;

const VerticalLine = styled.div`
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
  position: absolute;
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 70rem;
  max-height: 70rem;
`;
