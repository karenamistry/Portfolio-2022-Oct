import React from "react";
import {
  BackgroundAll,
  Background,
  Profile,
  Avatar,
  Name,
  Quote,
  MotionA,
  MotionB,
  MotionC,
} from "../styles/componentStyles/projects.two.styles";
import { Container } from "../styles/globalStyles";

function ProTwo() {
  return (
    <div>
      <BackgroundAll>
        <Background>
          <Container>
            <Profile>
              <Avatar initial={{}} animate={{}} transition={{}}></Avatar>
              <Name>
                <MotionA
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0,
                  }}
                >
                  Hi.{" "}
                </MotionA>
                <MotionB
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.25,
                  }}
                >
                  I'm{" "}
                </MotionB>
                <MotionC
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                  }}
                >
                  Karena!
                </MotionC>
              </Name>
              <Quote>
                I create thoughtful digital interfaces, that aim to understand
                the people using them. I have 4+ years designing for startups in
                Ottawa, Toronto & Montreal.
              </Quote>
            </Profile>
          </Container>
        </Background>
      </BackgroundAll>
    </div>
  );
}

export default ProTwo;
