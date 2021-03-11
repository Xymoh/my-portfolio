import React from "react";
import imgPython from "../../images/pythonSkill.png";
import imgCsharp from "../../images/csharpSkill.png";
import imgReact from "../../images/reactSkill.png";
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutIcon,
  AboutH2,
  AboutP,
  AboutP2,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutH1>My skills</AboutH1>
      <AboutP2>
        These are my best-presented skills, and I've also gained some basic
        knowledge on other technologies that I have included on my CV
      </AboutP2>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon src={imgPython} />
          <AboutH2>Python</AboutH2>
          <AboutP>Fluent knowledge within Discord.py, SQLite and JSON</AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon src={imgCsharp} />
          <AboutH2>C#</AboutH2>
          <AboutP>
            Programming in Xamarin, Unity, WPF, currently learning asynchronous
            programming
          </AboutP>
        </AboutCard>
        <AboutCard>
          <AboutIcon src={imgReact} />
          <AboutH2>React</AboutH2>
          <AboutP>
            Pretty much fresh, have some base knowledge in styled components,
            tailwind css, react routing/scroll
          </AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
