import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
// Lazy load components
const HomeLayout = lazy(() => import("./pages/HomeLayout"));
const Overview = lazy(() => import("./pages/Overview"));
const About = lazy(() => import("./pages/About"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Events = lazy(() => import("./pages/Events"));
const ScrollToTop = lazy(() => import("./components/ScroolToTop"));
const SelectDepartment = lazy(() => import("./pages/SelectDepartment"));
const Programs = lazy(() => import("./pages/SelectPrograms"));
const SemEcontents = lazy(() => import("./pages/SemEcontents"));
const Semesters = lazy(() => import("./pages/SelectSemesters"));
const SearchEcontents = lazy(() => import("./pages/SearchEcontents"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Overview />} />
            <Route path="about" element={<About />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="e-content" element={<SelectDepartment />} />
          <Route path="e-content/search" element={<SearchEcontents />} />
          <Route path="e-content/:deptID/programs" element={<Programs />} />
          <Route
            path="e-content/:programId/:semesters"
            element={<Semesters />}
          />
          <Route
            path="e-content/:programId/sem/:semester"
            element={<SemEcontents />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
