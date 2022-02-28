import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import SceneGraph from "./routes/SceneGraph";
import Material from "./routes/Material";
import GeometryOneTwo from "./routes/GeometryOneTwo";
import GeometryThree from "./routes/GeometryThree";
import Light from "./routes/Light";
import CameraSystem from "./routes/CameraSystem";
import ShadowSystem from "./routes/ShadowSystem";
import MaterialPartTwo from "./routes/MaterialPartTwo";
import Reactthreefiber from "./routes/Reactthreefiber";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactthreefiber" element={<Reactthreefiber />} />
        <Route path="/geometryonetwo" element={<GeometryOneTwo />} />
        <Route path="/geometrythree" element={<GeometryThree />} />
        <Route path="/scenegraph" element={<SceneGraph />} />
        <Route path="/material" element={<Material />} />
        <Route path="/light" element={<Light />} />
        <Route path="/camera" element={<CameraSystem />} />
        <Route path="/shadow" element={<ShadowSystem />} />
        <Route path="/materialparttwo" element={<MaterialPartTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
