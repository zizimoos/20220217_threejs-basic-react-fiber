import styled from "styled-components";
import LigntSystem from "../components/LigntSystem";

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

const Light = () => {
  return (
    <Container>
      <Title>ThreeJS Light</Title>
      <LigntSystem />
    </Container>
  );
};
export default Light;
