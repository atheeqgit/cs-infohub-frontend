import { useState } from "react";
import "./App.css";
import HomeLayout from "./pages/HomeLayout";
import { BrowserRouter, Routes, Route } from "react-router";
import Overview from "./pages/Overview";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import ScrollToTop from "./components/ScroolToTop";
import EcontentLayout from "./pages/EcontentLayout";
import { Programs } from "./pages/Programs";
import Econtents from "./pages/SearchEcontents";
import SemEcontents from "./pages/SemEcontents";
import { Semesters } from "./pages/Semesters";
import SearchEcontents from "./pages/SearchEcontents";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Overview />} />
            <Route path="about" element={<About />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="events" element={<Events />} />
          </Route>
          <Route path="e-content" element={<EcontentLayout />} />
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
          {/* <Route path="e-content/:programId/sem/:semester" element={<SemEcontents />} /> */}

          {/* <Route path="e-content/:progID/:pageNumber" element={<Econtents />} /> */}
        </Routes>
        {/* <HtmlForm /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
