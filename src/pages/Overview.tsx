import React from "react";
import EventsCard from "../components/EventsCard";
import { infrastructureData } from "../mockData";
import FacultyCard from "../components/FacultyCard";
import InfrastructureCard from "../components/InfrastructureCard";
import { useGlobalContext } from "../context";
import TitleText from "../components/TitleText";
import { NavLink } from "react-router-dom";
import NavLinkBtn from "../components/NavLinkBtn";
import CountUp from "react-countup";

const Overview = () => {
  const { departmentData } = useGlobalContext();

  return departmentData ? (
    <>
      <section className="section-px section-py" id="about">
        <TitleText title="Distinctiveness" />
        <div className="px-4  md:pl-10 ">
          {departmentData?.about.map((data, idx) => {
            return (
              <p key={idx} className="text-base font-medium ">
                {data
                  .split("\n")
                  .slice(0, 2)
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                      <br />
                    </React.Fragment>
                  ))}
              </p>
            );
          })}
          <NavLink to="/about">
            <h1 className="text-base mt-2 cursor-pointer text-black hover:text-red-800 w-fit font-bold">
              READ MORE.....
            </h1>
          </NavLink>
        </div>
      </section>
      <section className="w-full p-8 flex flex-row   justify-center items-center bg-red-800">
        <div className="flex-1 flex flex-col text-white  justify-center items-center border-r-2 border-solid border-white">
          <h1 className="capitalize large-text font-semibold">
            <CountUp
              end={departmentData?.snippetData.studentsCount || 0}
              enableScrollSpy={true}
              scrollSpyDelay={300}
              duration={4}
              scrollSpyOnce={true}
            />
            +
          </h1>
          <h1 className="capitalize text-xl font-medium">Students</h1>
        </div>
        <div className="flex-1 flex flex-col text-white  justify-center items-center border-r-2 border-solid border-white">
          <h1 className="capitalize large-text font-semibold">
            <CountUp
              end={departmentData?.snippetData.staffsCount || 0}
              enableScrollSpy={true}
              scrollSpyDelay={300}
              duration={4}
              scrollSpyOnce={true}
            />
            +
          </h1>
          <h1 className="capitalize text-xl font-medium">Staffs</h1>
        </div>
        <div className="flex-1 flex flex-col text-white  justify-center items-center">
          <h1 className="capitalize large-text font-semibold">
            <CountUp
              end={departmentData?.snippetData.alumniCount || 0}
              enableScrollSpy={true}
              scrollSpyDelay={400}
              duration={4}
              scrollSpyOnce={true}
            />
            +
          </h1>
          <h1 className="capitalize text-xl font-medium">Aulmni</h1>
        </div>
      </section>
      <section
        id="programs"
        className="programs-bg section-px section-py w-full flex flex-col"
      >
        <TitleText title="programmes offered" color="text-white" />
        {departmentData?.programsData?.map((program, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row mb-10 md:mb-20 items-center justify-center gap-2 "
            >
              <div className="hidden md:flex flex-1  justify-center items-center mb-4 md:mb-0">
                <h1 className="large-text font-bold text-white">
                  {program.title}
                </h1>
              </div>
              <div className=" flex-1 flex flex-col justify-center items-left">
                <h3 className="text-2xl font-bold text-[#3EFF0D]">
                  {program.title}
                </h3>
                <h1 className="text-3xl font-bold text-white uppercase mb-6">
                  {program.programType}
                </h1>
                <div className="text-[#ffffff] text-base gap-4 flex flex-col ">
                  {program.aboutProgram.map((data, index) => {
                    return (
                      <p key={index} className="text-base font-medium ">
                        {data.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section
        id="events"
        className="section-px section-py flex flex-col gap-6"
      >
        <TitleText title="Recent Events" />
        <div className="grid grid-cols-2 md:grid-cols-12  gap-4 py-4">
          {departmentData?.eventsData.map((event, index) => (
            <EventsCard key={index} event={event} />
          ))}
        </div>
        <NavLinkBtn text="View all Events" toLink="/events" />
      </section>
      <section
        id="faculty"
        className="faculty-bg section-px section-py flex flex-col gap-6"
      >
        <TitleText title="Faculty" />
        <div className="grid grid-cols-3 gap-4 py-4">
          {departmentData?.facultyData.map((faculty, index) => (
            <FacultyCard
              key={index} // ✅ Always add a unique key
              faculty={faculty}
            />
          ))}
        </div>
        <NavLinkBtn text="View all faculty" toLink="/faculty" />
      </section>
      <section
        id="infrastructure"
        className="section-px section-py flex flex-col gap-6"
      >
        <TitleText title="Infrastructure" />
        <div className="grid grid-cols-2   gap-4 ">
          {infrastructureData?.map((infra, index) => {
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
    </>
  ) : (
    <h1> some error has occured</h1>
  );
};

export default Overview;
