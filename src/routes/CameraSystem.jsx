import styled from "styled-components";
import Camera from "../components/Camera";

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
  color: black;
`;

const CameraSystem = () => {
  return (
    <Container>
      <Title>ThreeJS Camera</Title>
      <Camera />
    </Container>
  );
};
export default CameraSystem;
