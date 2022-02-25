import styled from "styled-components";
import Shadow from "../components/Shadow";

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

const ShadowSystem = () => {
  return (
    <Container>
      <Title>ThreeJS</Title>
      <Shadow />
    </Container>
  );
};
export default ShadowSystem;
