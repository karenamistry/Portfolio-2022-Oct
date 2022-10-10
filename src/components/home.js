import React from "react";

import {
  Background,
  Width,
  Name,
  Words,
  Avatar,
  Text,
  Wrap,
  Title,
  Project,
  TextFlex,
  Works,
  Heading,
  Description,
  ProjectInfo,
  StyledLink,
} from "../styles/componentStyles/home.styles";

import { Container } from "../styles/globalStyles";

function Home() {
  return (
    <div>
      <Background first>
        <Wrap>
          <Avatar
            hi
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.75,
              type: "spring",
              stiffness: 75,
              delay: 2,
            }}
          ></Avatar>
          <Name>
            <Words
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                delay: 0,
              }}
            >
              👋
            </Words>
            <Words
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                delay: 0.25,
              }}
            >
              I'm
            </Words>
            <Words
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                delay: 0.5,
              }}
            >
              Karena.
            </Words>
          </Name>

          <Text
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.75,
              type: "spring",
              stiffness: 75,
              delay: 2,
            }}
          >
            I create thoughtful digital interfaces, that aim to understand the
            people using them.
          </Text>
        </Wrap>
      </Background>
      <Background second>
        <Title>Featured Works</Title>
        <Width>
          <StyledLink to="/Stocate">
            <Project
              stocate
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <TextFlex>
                <Heading>Stocate</Heading>
                <ProjectInfo>UI &#38; UX</ProjectInfo>
                <ProjectInfo>2022, Apr to Aug</ProjectInfo>
                <Description>
                  Creating customer centered solutions to aid the buying
                  experience of sustainable products.
                </Description>
              </TextFlex>
              <Works stocate></Works>
            </Project>
          </StyledLink>

          <StyledLink to="/Expedite">
            <Project
              expedite
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <TextFlex>
                <Heading>Expedite</Heading>
                <ProjectInfo>UI &#38; UX</ProjectInfo>
                <ProjectInfo>2022, Apr to Present</ProjectInfo>

                <Description>
                  Developing a product that seamlessly integrates complex
                  systems into a friendly interface.
                </Description>
              </TextFlex>
              <Works expedite></Works>
            </Project>
          </StyledLink>

          <StyledLink to="/Beacons">
            <Project
              beacons
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 0.05,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              <TextFlex>
                <Heading>Beacons</Heading>
                <ProjectInfo>UR, UI &#38; UX</ProjectInfo>
                <ProjectInfo>2022, Jan to Feb</ProjectInfo>
                <Description>
                  Improving the service experience for customers and empowering
                  employee success in the retail workplace.
                </Description>
              </TextFlex>
              <Works beacons></Works>
            </Project>
          </StyledLink>
        </Width>
      </Background>
    </div>
  );
}

export default Home;
