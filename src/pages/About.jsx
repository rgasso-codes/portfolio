import React from 'react';
import Timeline from '@mui/lab/Timeline';
import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";

const Experiences = [
  {
    companyName: "Thoughtworks",
    date: "March 2020 - Currently",
    title: "Consultant Developer",
    description: "Rebeca works as a software engineer for a clothing department store client. She helps the Foundation team to build and maintain the typescript components library that will be used by other development teams.",
  },
  {
    companyName: "Stefanini Brasil",
    date: "July 2019 - January 2020",
    title: "Software Developer",
    description: "Rebeca joined Stefanini Brazil to integrate the team, from Dell Inc. client, that would take care of the Rubicon that handles the internal organization of sellers.",
  },
  {
    companyName: "Redehost",
    date: "September 2018 - June 2019",
    title: "Software Developer - internship",
    description: "Rebeca joined RedeHost to integrate the team that would take care of hosting websites, emails and cloud servers. The team also developed internal systems and web systems",
  },
  {
    companyName: "WebGlobal",
    date: "July 2017 — August 2018",
    title: "Front-End Developer - internship",
    description: "Rebeca joined WebGlobal to integrate the team that would build and maintain webapplications. They built the front-end of a price comparison called WebArCondicionado",
  },
];
const Education = [
  {
    colegeName: "Biology",
    date: "January 2024 - Currently",
    title: "PUCRS",
    description: "Rebeca works as a software engineer for a clothing department store client. She helps the Foundation team to build and maintain the typescript components library that will be used by other development teams.",
  },
  {
    colegeName: "System Development - Web",
    date: "January, 2023 - Currently",
    title: "Universidade do Vale do Rio dos Sinos",
    description: "Expand knowledge in technological studies of the Internet and all its applications, in addition to understanding the interaction and communication aspects involved in these technologies and their impacts on users.",
  },
  {
    colegeName: "Computer Science",
    date: "2016 — 2018",
    title: "Universidade Luterana do Brasil",
  },
];

const About = () => {
  return (
    <section className="relative background flex flex-col items-center items-center gap-4 pt-16 pb-16">
      <div className="flex items-center justify-center rounded-lg bg-white flex-col p-5 m-1.5">
        <h2 className="text-2xl font-mono m-5">WORK EXPERIENCE</h2>
        <Timeline position="alternate">
          { Experiences.map( (experience) =>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <h3 className="font-semibold">{experience.companyName}</h3>
                <p>{experience.date}</p>
                <h4>{experience.title}</h4>
                <p>{experience.description}</p>
              </TimelineContent>
            </TimelineItem>
          ) }
        </Timeline>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-white flex-col p-5 m-1.5">
        <h2 className="text-2xl font-mono m-5">EDUCATION</h2>
        <Timeline position="alternate">
          { Education.map( (edu) =>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h3 className="font-semibold">{edu.colegeName}</h3>
                  <p>{edu.date}</p>
                </div>
                <h4>{edu.title}</h4>
                <p>{edu.description}</p>
              </TimelineContent>
            </TimelineItem>
          ) }
        </Timeline>
      </div>
    </section>

  );
};

export default About;