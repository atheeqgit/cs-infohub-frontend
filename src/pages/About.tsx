import React from "react";
import { useGlobalContext } from "../context";

const About = () => {
  const { departmentData } = useGlobalContext();
  return (
    <section className="section-px section-py">
      <h1 className="cursive-text text-red-800 large-text mb-4">
        About department
      </h1>

      <div className="pl-2 ">
        {departmentData?.about.map((data, index) => {
          return (
            <p key={index} className="text-base font-medium ">
              {data.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                  <br />
                </React.Fragment>
              ))}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default About;
