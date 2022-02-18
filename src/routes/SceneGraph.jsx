import styled from "styled-components";
import SolarSystem from "../components/SolarSystem";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.h1`
  padding: 10px;
`;

const SceneGraph = () => {
  return (
    <Container>
      <Title>ThreeJS reactJS</Title>
      <SolarSystem />
    </Container>
  );
};

export default SceneGraph;
