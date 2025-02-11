import React from "react";
import EventsCard from "../components/EventsCard";
import { eventsData, FacultyData, infrastructureData } from "../mockData";
import FacultyCard from "../components/FacultyCard";
import InfrastructureCard from "../components/InfrastructureCard";

const Home = () => {
  return (
    <div className="max-width w-full">
      <nav className="bg-red-800  w-full flex flex-row justify-between items-center px-4 py-1">
        <div>
          <img className="w-20 h-20" src="/logo.png" alt="" />
        </div>
        <ul className="flex flex-row gap-6 items-center capitalize transition font-semibold text-white mx-auto ">
          <li className="cursor-pointer hover:underline  ">Home</li>
          <li className="cursor-pointer hover:underline  ">about</li>
          <li className="cursor-pointer hover:underline  ">events</li>
          <li className="cursor-pointer hover:underline  ">gallery</li>
          <li className="cursor-pointer hover:underline  ">E-content</li>
        </ul>
      </nav>
      <section className="banner h-[60vh]">
        <div className="w-full relative">
          <img
            src="/banner1.png"
            className="w-full h-[60vh] object-cover"
            alt=""
          />
          <div className="section-px banner-overlay absolute top-0 left-0 w-full h-full flex flex-row justify-center items-center">
            <div className="flex-1 flex flex-col text-white justify-center items-center ">
              <div>
                <h1 className=" large-text font-medium cursive-text mb-1">
                  Department of -
                </h1>
                <h1 className=" large-text uppercase font-bold ">
                  Computer Science
                </h1>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <img className="w-[50%] object-cover" src="/logo.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full p-8 flex flex-row   justify-center items-center bg-red-800">
        <div className="flex-1 flex flex-col text-white  justify-center items-center border-r-2 border-solid border-white">
          <h1 className="capitalize large-text font-semibold">300+</h1>
          <h1 className="capitalize text-xl font-medium">Students</h1>
        </div>
        <div className="flex-1 flex flex-col text-white  justify-center items-center border-r-2 border-solid border-white">
          <h1 className="capitalize large-text font-semibold">40+</h1>
          <h1 className="capitalize text-xl font-medium">Staffs</h1>
        </div>
        <div className="flex-1 flex flex-col text-white  justify-center items-center">
          <h1 className="capitalize large-text font-semibold">2k+</h1>
          <h1 className="capitalize text-xl font-medium">Aulmni</h1>
        </div>
      </section>
      <section className="section-px section-py">
        <h1 className="cursive-text text-red-800 large-text mb-4">
          Distinctiveness - about
        </h1>
        <p className="text-[16px] pl-10 font-semibold text-[#444444]">
          The Department aims at providing quality education in Computer Science
          through graduate programme. Highly qualified professors with recent
          teaching techniques define our department. It instils confidence among
          the students to make themselves experts in the field of computers. It
          also enables them to occupy a place of prominence in IT industries
          globally. The students ought to do a project on or off-campus in the
          final year with an option to choose their platform and thus they are
          exposed to the real time computer problems which will mould them to
          conquer the challenging IT world.
          <br />
          Every year this department aims in overall development of the students
          to meet industry needs. Teachers are constantly devising interesting
          methods such as expert lectures, presentations, workshops, certificate
          courses and seminars. Students are encouraged to do projects in latest
          technology and as per industry standards under the guidance of
          teachers.
          <br />
          Our Department has ICT facilities like LCD projectors, Computers,
          Internet which is used in the teaching learning processes. Teaching is
          made student centric and innovative teaching methodologies are used by
          the teachers in the dissemination of information. Exploration of
          talent through teaching learning process Class tests, projects,
          seminars, presentation by students are regular features of class room
          teaching by which advanced learners are identified.
          <h1 className="text-base mt-2 cursor-pointer text-black hover:text-red-800 w-fit font-bold">
            READ MORE.....
          </h1>
        </p>
      </section>
      <section className="programs-bg section-px section-py w-full flex flex-col gap-20 ">
        <h1 className="cursive-text text-white large-text mb-4">
          programmes offered
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 ">
          <div className=" flex-1 flex justify-center items-center mb-4 md:mb-0">
            <h1 className="large-text font-bold text-white">
              B.Sc. -<br /> Computer Science
            </h1>
          </div>
          <div className=" flex-1 flex flex-col justify-center items-left">
            <h3 className="text-2xl font-bold text-[#3EFF0D]">
              B.Sc. - Computer Science
            </h3>
            <h1 className="text-3xl font-bold text-white uppercase mb-10">
              Under Graduate Programme
            </h1>
            <div className="text-[#ffffff] text-base gap-5 flex flex-col ">
              <p>
                A Bachelor of Science in Computer Science (BSc CS) is a
                three-year undergraduate program that covers the theory and
                practical applications of computers and computational
                systems. The program's curriculum includes topics such as: {" "}
                <br />
              </p>
              <p>
                computer networking, operating systems, programming languages,
                software development, algorithms, and data structures.
                <br />
              </p>
              <p>
                The goal of the program is to develop professionals and research
                fellows who can use computer technology in any industry. Some
                careers that a BSc CS degree can lead to include: 
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 ">
          <div className=" flex-1 flex justify-center items-center mb-4 md:mb-0">
            <h1 className="large-text font-bold text-white">
              B.Sc. -<br /> Computer Science
            </h1>
          </div>
          <div className=" flex-1 flex flex-col justify-center items-left">
            <h3 className="text-2xl font-bold text-[#3EFF0D]">
              B.Sc. - Computer Science
            </h3>
            <h1 className="text-3xl font-bold text-white uppercase mb-10">
              Under Graduate Programme
            </h1>
            <div className="text-[#ffffff] text-base gap-5 flex flex-col ">
              <p>
                A Bachelor of Science in Computer Science (BSc CS) is a
                three-year undergraduate program that covers the theory and
                practical applications of computers and computational
                systems. The program's curriculum includes topics such as: {" "}
                <br />
              </p>
              <p>
                computer networking, operating systems, programming languages,
                software development, algorithms, and data structures.
                <br />
              </p>
              <p>
                The goal of the program is to develop professionals and research
                fellows who can use computer technology in any industry. Some
                careers that a BSc CS degree can lead to include: 
              </p>
            </div>
          </div>
        </div>
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
        <div className="grid grid-cols-3   gap-4 p-4">
          {FacultyData.map((faculty, index) => (
            <FacultyCard
              key={index} // ✅ Always add a unique key
              imgSrc={faculty.imgSrc}
              name={faculty.name}
              designation={faculty.designation}
              education={faculty.education}
              pdfSrc={faculty.pdfSrc}
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
