import React from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { departmentData } = useGlobalContext();
  return (
    <section className="section-px section-py">
      <h1 className="cursive-text text-red-800 large-text mb-4">
        About department
      </h1>
      <div className="pl-10 ">
        {departmentData?.about.map((data) => {
          return (
            <p className="text-[16px] font-semibold text-[#444444]">
              {data}
              <br />
              <br />
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default About;
