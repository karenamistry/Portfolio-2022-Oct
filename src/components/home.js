import React from "react";

import {
  Background,
  Name,
  Words,
  Avatar,
  Text,
  Span,
  Wrap,
} from "../styles/componentStyles/home.styles";

import { Container } from "../styles/globalStyles";

function Home() {
  return (
    <div>
      <Background>
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
    </div>
  );
}

export default Home;
