import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import SceneGraph from "./routes/SceneGraph";
import Material from "./routes/Material";
import GeometryOneTwo from "./routes/GeometryOneTwo";
import GeometryThree from "./routes/GeometryThree";
import Light from "./routes/Light";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geometryonetwo" element={<GeometryOneTwo />} />
        <Route path="/geometrythree" element={<GeometryThree />} />
        <Route path="/scenegraph" element={<SceneGraph />} />
        <Route path="/material" element={<Material />} />
        <Route path="/light" element={<Light />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
