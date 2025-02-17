import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import InfoBanner from "../components/InfoBanner";
import LoadingScreen from "../components/LoadingScreen";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const { departmentData, loading } = useGlobalContext();
  const location = useLocation(); // Get current path
  const [currentBanner, setCurrentBanner] = useState<string>("");
  const [currentTitle, setCurrentTitle] = useState<string>("");

  // Default banner and title for the overview route
  const defaultBanner = "/banner1.png"; // Replace with your default banner image
  const defaultTitle = "Department Overview";

  // Update banner and title based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentBanner(defaultBanner);
        setCurrentTitle(defaultTitle);
        break;
      case "/about":
        setCurrentBanner(departmentData?.aboutBG?.url || defaultBanner);
        setCurrentTitle("About Us");
        break;
      case "/faculty":
        setCurrentBanner(departmentData?.facultyBG?.url || defaultBanner);
        setCurrentTitle("Faculty");
        break;
      case "/events":
        setCurrentBanner(departmentData?.eventsBG?.url || defaultBanner);
        setCurrentTitle("Recent Events");
        break;
      case "/E-content":
        setCurrentBanner(defaultBanner);
        // setCurrentBanner(departmentData?.eContentBG?.url || defaultBanner);
        setCurrentTitle("E-Content");
        break;
      default:
        setCurrentBanner(defaultBanner);
        setCurrentTitle(defaultTitle);
    }
  }, [location.pathname, departmentData]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="max-width w-full">
      <section className="banner relative mb-10">
        {/* Banner Image and Overlay */}
        {location.pathname == "/" ? (
          <div className="w-full h-[40vh] md:h-[50vh] relative z-[10]">
            <img
              src={currentBanner}
              className="w-full h-[40vh] md:h-[50vh] object-cover"
              alt="Department Banner"
            />
            <div className="section-px banner-overlay absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-start md:items-center">
              {/* Department Name */}
              <div className="flex-1 flex flex-col text-white justify-center items-start text-left">
                <h1 className="large-text font-medium cursive-text mb-1">
                  Department of -
                </h1>
                <h1 className="large-text uppercase font-bold">
                  {departmentData?.deptName || "Loading..."}
                </h1>
              </div>

              {/* Logo */}
              <div className="hidden md:flex flex-1 justify-center items-center">
                <img
                  className="w-[30%] object-cover"
                  src="/logo.png"
                  alt="Department Logo"
                />
              </div>
            </div>
          </div>
        ) : (
          <InfoBanner bannerImg={currentBanner} bannerTitle={currentTitle} />
        )}

        <div className="bg-white absolute bottom-[-11%] left-[50%] transform translate-x-[-50%] w-[90%] lg:w-[70%] flex flex-row justify-between items-center rounded-xl overflow-x-auto text-nowrap gap-1 p-1 z-[20]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-btns nav-btns-active" : "nav-btns"
            }
          >
            overview
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-btns nav-btns-active" : "nav-btns"
            }
          >
            about
          </NavLink>
          <NavLink
            to="/faculty"
            className={({ isActive }) =>
              isActive ? "nav-btns nav-btns-active" : "nav-btns"
            }
          >
            faculty
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              isActive ? "nav-btns nav-btns-active" : "nav-btns"
            }
          >
            recent events
          </NavLink>
          <NavLink
            to="/E-content"
            className={({ isActive }) =>
              isActive ? "nav-btns nav-btns-active" : "nav-btns"
            }
          >
            E-content
          </NavLink>
        </div>
      </section>
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
