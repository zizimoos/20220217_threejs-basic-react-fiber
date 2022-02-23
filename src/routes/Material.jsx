import styled from "styled-components";
import MaterialLine from "../components/MaterialLine";
import MaterialLineDashed from "../components/MaterialLineDashed";
import MaterialPoint from "../components/MaterialPoint";

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

const Material = () => {
  return (
    <Container>
      <Title>ThreeJS Material</Title>
      <MaterialPoint />
      <MaterialLine />
      <MaterialLineDashed />
    </Container>
  );
};
export default Material;
