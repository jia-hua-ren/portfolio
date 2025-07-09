import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import ProjectsPage from "@/pages/ProjectsPage";
// import { Projects } from "@/pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter basename="/portfolio/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
