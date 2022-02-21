import styled from "styled-components";
import BoxSample from "../components/BoxSample";
import GeometryPartCustomGeo from "../components/GeometryPartCustomGeo";
import GeometryPartOne from "../components/GeometryPartOne";
import GeometryPartThreeExtrude from "../components/GeometryPartThreeExtrude";
import GeometryPartThreeLathe from "../components/GeometryPartThreeLathe";
import GeometryPartThreeShape from "../components/GeometryPartThreeShape";
import GeometryPartThreeShapeHeart from "../components/GeometryPartThreeShapeHeart";
import GeometryPartThreeShapeSine from "../components/GeometryPartThreeShapeSine";
import GeometryPartThreeText from "../components/GeometryPartThreeText";
import GeometryPartThreeTube from "../components/GeometryPartThreeTube";
import GeometryPartTwo from "../components/GeometryPartTwo";
import GeometryPartTwoCorn from "../components/GeometryPartTwoCorn";
import GeometryPartTwoCylinder from "../components/GeometryPartTwoCylinder";
import GeometryPartTwoPlane from "../components/GeometryPartTwoPlane";
import GeometryPartTwoRing from "../components/GeometryPartTwoRing";
import GeometryPartTwoSphere from "../components/GeometryPartTwoSphere";
import GeometryPartTwoTorus from "../components/GeometryPartTwoTorus";
import GeometryPartTwoTorusKnot from "../components/GeometryPartTwoTorusKnot";

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

const Geometry = () => {
  return (
    <Container>
      <Title>ThreeJS reactJS</Title>
      <BoxSample />
      <GeometryPartOne />
      <GeometryPartTwo />
      <GeometryPartTwoCorn />
      <GeometryPartTwoCylinder />
      <GeometryPartTwoSphere />
      <GeometryPartTwoRing />
      <GeometryPartTwoPlane />
      <GeometryPartTwoTorus />
      <GeometryPartTwoTorusKnot />
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
export default Geometry;
