import styled from "styled-components";
import BoxSample from "../components/BoxSample";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <BoxSample />
    </Container>
  );
};
export default Home;
