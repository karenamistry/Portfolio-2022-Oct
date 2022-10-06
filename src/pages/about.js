import React from "react";

import { Container } from "../styles/globalStyles";
import { Grid, Column, Header, Text, Description } from "../styles/work.styles";

import { Cover, ContentInfo, Hero } from "../styles/about.styles";

function About() {
  return (
    <div>
      <ContentInfo about>
        <Container fluid>
          <Hero>
            <Cover Image1></Cover>
            <Cover Image2></Cover>
            <Cover Image3></Cover>
          </Hero>
          <Hero>
            <Cover Image4></Cover>
            <Cover Image5></Cover>
            <Cover Image6></Cover>
          </Hero>
        </Container>

        <Container>
          <Column>
            <Description title>Hello, I'm Karena.</Description>
            <Description>
              I like to do a lot of things. photography, coding, motion and of
              course, designing. These days, you can find me learning building
              my skills in react js, doing some digital drawing and reading
              about UX. I grew up in the quiet city of Ottawa, and I studied
              design in Toronto at York University and Sheridan College.
            </Description>
          </Column>
        </Container>
      </ContentInfo>
    </div>
  );
}

export default About;
