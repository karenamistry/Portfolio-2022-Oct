import React from "react";
import { Container } from "../styles/globalStyles";

import {
  Cover,
  Grid,
  Column,
  ContentInfo,
  Hero,
  Header,
  Text,
  List,
  Item,
  Description,
  Explanation,
  ProjectInfo,
  ProjectInfoDetails,
  ColorGrid,
  Block,
  Typography,
  Case,
  Glyph,
} from "../styles/work.styles";

import {
  ImageAccess,
  ImageIntro,
  ImageColours,
  ImageComponent,
} from "../styles/expediteImages.styles";

function Expedite() {
  return (
    <div>
      <ContentInfo expedite paddingBottom>
        <Container fluid>
          <Cover expedite>
            <Hero></Hero>
          </Cover>
        </Container>

        <Container>
          <Column>
            <Description title>CX Expedite</Description>
            <Description>
              I'm working as the sole designer on the Expedite product for
              Dynamics CXS. I'm working to redesign their previous interface to{" "}
              <span className="Bold">
                simplify user journeys, introduce new features &#38; establish a
                brand identity for their products.
              </span>
            </Description>
            <Explanation>
              Expedite works to connect floor employees with warehouse employees
              in retail stores. It communicates with the warehouse to ready a
              product for customer pickup. It{" "}
              <span className="Bold">seamlessly manages</span> the communication
              between pickup and customer via SMS.
            </Explanation>
          </Column>

          <Grid>
            <Column infoFour>
              <ProjectInfo>Role</ProjectInfo>
              <ProjectInfoDetails> UI &#38; UX</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Platform</ProjectInfo>
              <ProjectInfoDetails>Mobile</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Timeline</ProjectInfo>
              <ProjectInfoDetails>2022, Apr to Present</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Team</ProjectInfo>
              <ProjectInfoDetails>Karena Mistry</ProjectInfoDetails>
            </Column>
          </Grid>
        </Container>
      </ContentInfo>

      <Container>
        <Grid center>
          <Column textHeading>
            <Header>Streamlining the pickup-in-store process</Header>
          </Column>

          <Column>
            <Text>
              Expedite organizes the complex systems behind the pickup-in-store
              process. The mobile application manages the communication between
              customer facing and warehouse employees in retail stores{" "}
              <span className="Bold"> at each step in the process.</span>
            </Text>
          </Column>

          <Column imageFull>
            <ImageIntro></ImageIntro>
          </Column>

          <Column textMidLeft>
            <Header>Customer Profile</Header>
            <Text>
              A goal we had was to add new features to the expedite flow,
              specifically the customer profile. The customer profile was made
              to{" "}
              <span className="Bold">
                vastly improve customer satisfaction during the customer
                journey.
              </span>{" "}
              The customer profile needed to be integrated with the already
              complex CXP user journey for customer facing employees.
            </Text>
          </Column>

          <Column imageMidRight></Column>

          <Column textMidRight>
            <Header>Readying for Soft Launch</Header>
            <Text>
              Another goal while working on Expedite was readying the product
              for soft launch. This meant that speed was the name of the game.
              For this reason, we needed a design system to aid in the
              consistency and speed for designing and developing pages.
            </Text>
          </Column>

          <Column textMidLeft>
            <Header>Design System</Header>
            <Text>
              The main purpose of the design system, in the case of expedite,
              was to{" "}
              <span className="Bold">
                create consistency across multiple applications.
              </span>{" "}
              Working with already existing brand colors, I was able to build a
              solidified and documented design system.
            </Text>
          </Column>

          <Column imageMidRight></Column>

          <Column imageFull>
            <ColorGrid>
              <Block Five>Primary</Block>
              <Block Four>Secondary</Block>
              <Block One>100</Block>
              <Block Two>400</Block>
              <Block Three>600 </Block>
            </ColorGrid>
          </Column>
          <Column textMidLeft>
            <Typography>
              <Case One>H1 Heading</Case>
              <Case Two>H2 Subheading</Case>
              <Case Three>H3 Caption</Case>
              <Case Four>P Body</Case>
              <Case Five>Buttons</Case>
              <Case Six>H4 Title</Case>
              <Case Seven>H5 Subtitle</Case>
              <Case Eight>H6 Caption</Case>
              <Case Nine>Tags</Case>
            </Typography>
          </Column>
          <Column imageMidRight>
            <Glyph>Aa</Glyph>
            <Glyph smaller>Poppins, Sans Serif</Glyph>
          </Column>

          <Column hugImageLeft>
            <ImageComponent></ImageComponent>
          </Column>

          <Column textRight>
            <Header>Typographic Hierarchy</Header>
            <Text>
              Building type styles to be used across all the expedite
              application was a design challenge I faced. The amount of
              information needed to pack into the small components made the
              texts styles more extensive, and required more attention to
              hierarchy.
            </Text>
          </Column>
        </Grid>
      </Container>

      <ContentInfo expedite paddingTop paddingBottom>
        <Container fluid>
          <Container>
            <Grid>
              <Column listLeft>
                <Header>More Coming Soon!</Header>
                <Text>
                  This product is still the process of being worked on! I'm
                  excited to show updates on this project as it gets further in
                  its development.
                </Text>
              </Column>
            </Grid>
          </Container>
        </Container>
      </ContentInfo>
    </div>
  );
}

export default Expedite;
