import styled from "styled-components";
import MaterialLine from "../components/MaterialLine";
import MaterialLineDashed from "../components/MaterialLineDashed";
import MaterialPoint from "../components/MaterialPoint";
import MaterialMeshBasic from "../components/MaterialMeshBasic";

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

const MaterialPartTwo = () => {
  return (
    <Container>
      <Title>ThreeJS MaterialPartTwo</Title>
      <MaterialMeshBasic />
    </Container>
  );
};
export default MaterialPartTwo;
