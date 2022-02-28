import styled from "styled-components";
import IntroSystem from "../components/IntroSystem";

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

const Reactthreefiber = () => {
  return (
    <Container>
      <Title>REACT THREE FIBER INTRO</Title>
      <IntroSystem />
    </Container>
  );
};
export default Reactthreefiber;
