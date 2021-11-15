import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://user-images.githubusercontent.com/78302050/141674102-9c672cb4-e861-4840-80f3-14821cab6d8a.png"
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Piyush Ranjan</strong>
            <br/>
            

I am a full-stack developer who is highly passionate to develop web-based products and keen on finding solutions for the same. I have hands-on experience in front-end and back-end technology. I am always ready to learn new technologies.

I am strongly interested in obtaining a software Developer position to work on enhancing the product experience.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
