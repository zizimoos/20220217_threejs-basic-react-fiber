import { BrowserRouter, Routes, Route } from "react-router-dom";

import Geometry from "./routes/Geometry";
import Home from "./routes/Home";
import SceneGraph from "./routes/SceneGraph";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geometry" element={<Geometry />} />
        <Route path="/scenegraph" element={<SceneGraph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
