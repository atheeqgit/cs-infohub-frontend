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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="" element={<HomeLayout />}>
            <Route index element={<Overview />} />
            <Route path="about" element={<About />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
        {/* <HtmlForm /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
