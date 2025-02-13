import React from "react";
import EventsCard from "../components/EventsCard";
import { eventsData, FacultyData, infrastructureData } from "../mockData";
import FacultyCard from "../components/FacultyCard";
import InfrastructureCard from "../components/InfrastructureCard";
import { useGlobalContext } from "../context";
import Navbar from "../components/Navbar";

const Home = () => {
  const { departmentData, loading } = useGlobalContext();
  return loading ? (
    <h1>Loading.....</h1>
  ) : (
    <div className="max-width w-full">
      <Navbar />
      <section className="banner relative mb-10">
        {/* Banner Image and Overlay */}
        <div className="w-full h-[40vh] md:h-[60vh] relative z-[10]">
          <img
            src="/banner1.png"
            className="w-full h-[40vh] md:h-[60vh] object-cover"
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
            <div className=" hidden md:flex flex-1  justify-center items-center">
              <img
                className="w-[60%] object-cover"
                src="/logo.png"
                alt="Department Logo"
              />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="bg-white absolute bottom-[-11%] left-[50%] transform translate-x-[-50%] w-[90%] lg:w-[70%] flex flex-row justify-between items-center rounded-xl overflow-x-auto text-nowrap gap-1 p-1 md:p-2 md:gap-2 z-[20]">
          <div className="nav-btns  nav-btns-active ">Overview</div>
          {["about", "events", "gallery", "E-content"].map((item) => (
            <div key={item} className="nav-btns">
              {item}
            </div>
          ))}
        </div>
      </section>
      {/* <section className="w-full p-8 flex flex-row   justify-center items-center bg-red-800">
        <div className="flex-1 flex flex-col text-white  justify-center items-center border-r-2 border-solid border-white">
          <h1 className="capitalize large-text font-semibold">
            {departmentData?.snippetData.studentsCount}+
          </h1>
          <h1 className="capitalize text-xl font-medium">Students</h1>
        </div>
        <div className="flex-1 flex flex-col text-white  justify-center items-center border-r-2 border-solid border-white">
          <h1 className="capitalize large-text font-semibold">
            {departmentData?.snippetData.staffsCount}+
          </h1>
          <h1 className="capitalize text-xl font-medium">Staffs</h1>
        </div>
        <div className="flex-1 flex flex-col text-white  justify-center items-center">
          <h1 className="capitalize large-text font-semibold">
            {departmentData?.snippetData.alumniCount}+
          </h1>
          <h1 className="capitalize text-xl font-medium">Aulmni</h1>
        </div>
      </section> */}

      <section className="section-px section-py">
        <h1 className="cursive-text text-red-800 large-text mb-4">
          Distinctiveness - about
        </h1>
        <div className="pl-10 ">
          {departmentData?.about.slice(0, 2).map((data) => {
            return (
              <p className="text-[16px] font-semibold text-[#444444]">
                {data}
                <br />
                <br />
              </p>
            );
          })}
          <h1 className="text-base mt-2 cursor-pointer text-black hover:text-red-800 w-fit font-bold">
            READ MORE.....
          </h1>
        </div>
      </section>
      <section className="programs-bg section-px section-py w-full flex flex-col gap-20 ">
        <h1 className="cursive-text text-white large-text mb-4">
          programmes offered
        </h1>
        {departmentData?.programsData?.map((program) => {
          return (
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 ">
              <div className=" flex-1 flex justify-center items-center mb-4 md:mb-0">
                <h1 className="large-text font-bold text-white">
                  {program.title}
                </h1>
              </div>
              <div className=" flex-1 flex flex-col justify-center items-left">
                <h3 className="text-2xl font-bold text-[#3EFF0D]">
                  {program.title}
                </h3>
                <h1 className="text-3xl font-bold text-white uppercase mb-10">
                  {program.programType}
                </h1>
                <div className="text-[#ffffff] text-base gap-4 flex flex-col ">
                  {program.aboutProgram.map((data) => {
                    return <p> {data}</p>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="section-px section-py flex flex-col gap-6">
        <h1 className="cursive-text text-red-800 large-text mb-4">
          Recent Events
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-12  gap-4 p-4">
          {eventsData.map((event, index) => (
            <EventsCard
              key={index}
              eventTitle={event.eventTitle}
              date={event.date}
              eventType={event.eventType}
              aboutEvent={event.aboutEvent}
              imgSrc={event.imgSrc}
              imgType={event.imgType}
            />
          ))}
        </div>
      </section>
      <section className="faculty-bg section-px section-py flex flex-col gap-6">
        <h1 className="cursive-text text-red-800 large-text mb-4">Faculty</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
          {departmentData?.facultyData.map((faculty, index) => (
            <FacultyCard
              key={index} // ✅ Always add a unique key
              faculty={faculty}
            />
          ))}
        </div>
      </section>
      <section className="section-px section-py flex flex-col gap-6">
        <h1 className="cursive-text text-red-800 large-text mb-4">
          Infrastructure
        </h1>
        <div className="grid grid-cols-2   gap-4 p-4">
          {infrastructureData.map((infra, index) => {
            return (
              <InfrastructureCard
                key={index}
                imgSrc={infra.imgSrc}
                name={infra.name}
                code={infra.code}
                about={infra.about}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
