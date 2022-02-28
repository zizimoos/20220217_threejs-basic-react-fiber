import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Link to="/reactthreefiber">
        <div>REACT THREE FIBER</div>
      </Link>

      <div>Geometry One</div>
      <div>Geometry Two</div>
      <div>Scene Graph</div>
      <div>Materail</div>
      <div>Light</div>
    </div>
  );
};
export default Home;
