import styled from "styled-components";

import GeometryPartCustomGeo from "../components/GeometryPartCustomGeo";
import GeometryPartThreeExtrude from "../components/GeometryPartThreeExtrude";
import GeometryPartThreeLathe from "../components/GeometryPartThreeLathe";
import GeometryPartThreeShape from "../components/GeometryPartThreeShape";
import GeometryPartThreeShapeHeart from "../components/GeometryPartThreeShapeHeart";
import GeometryPartThreeShapeSine from "../components/GeometryPartThreeShapeSine";
import GeometryPartThreeText from "../components/GeometryPartThreeText";
import GeometryPartThreeTube from "../components/GeometryPartThreeTube";

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

const GeometryThree = () => {
  return (
    <Container>
      <Title>ThreeJS reactJS</Title>
      <GeometryPartThreeShape />
      <GeometryPartThreeShapeHeart />
      <GeometryPartThreeShapeSine />
      <GeometryPartThreeTube />
      <GeometryPartThreeLathe />
      <GeometryPartThreeExtrude />
      <GeometryPartThreeText />
      <GeometryPartCustomGeo />
    </Container>
  );
};
export default GeometryThree;
