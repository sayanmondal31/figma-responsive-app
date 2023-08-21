import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Web = React.lazy(() => import("pages/Web"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Web />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
