import React from "react";
import Container from "./Container";
import Button from "./Button";

const About = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-4xl">About Me</h2>
        <div className="flex w-2/3 pt-20">
          <div className="flex-1 flex flex-col items-center ">
            <h3 className="text-2xl font-semibold">Experience</h3>
            <h4 className="text-lg text-gray">+2 Years Experience</h4>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <h3 className="text-2xl font-semibold">Projects</h3>
            <h4 className="text-lg text-gray">Over 8 Clients</h4>
          </div>
        </div>
        <div className="flex flex-col items-center text-center  w-3/5 pt-14 pb-7 text-lg text-gray">
          <p>I'm a front end developer with over 2 years of experience.</p>
          <br />
          <p>
            I have social and creative skills as well as a wide perspective to
            see the picture and be able to break down challenges in small
            pieces. I value teamwork and the chance to innovate and be creative.
            As I am a proactive person I really enjoy to be involved in multiple
            parts on a project and sharing ideas.
          </p>
          <br />
          <p>
            As a front end developer I have strong skills in Typescript and some
            Javascript frameworks such as React.js and Angular. I also have
            skills building small API'S using Node.js & Mongo DB.
          </p>
          <br />
          <p>
            Besides my tech skills, I am a bouldering fanatic and I like to dive
            from time to time.
          </p>
        </div>
        <div className="mt-8 flex gap-4">
          <Button whiteBg download link="" label="Download CV" />
          <Button whiteBg link="" label="Let's talk" />
        </div>
      </div>
    </Container>
  );
};

export default About;