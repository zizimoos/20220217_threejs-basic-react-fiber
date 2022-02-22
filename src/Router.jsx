import { BrowserRouter, Routes, Route } from "react-router-dom";

import Geometry from "./routes/Geometry";
import Home from "./routes/Home";
import SceneGraph from "./routes/SceneGraph";
import Material from "./routes/Material";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geometry" element={<Geometry />} />
        <Route path="/scenegraph" element={<SceneGraph />} />
        <Route path="/material" element={<Material />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
