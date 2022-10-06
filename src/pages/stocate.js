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
} from "../styles/work.styles";

import {
  Image8Week,
  ImageSystem,
  ImageSystem2,
  ImageAdding,
  ImageUserA,
  ImageUserB,
} from "../styles/stocateImages.styles";

function Stocate() {
  return (
    <div>
      <ContentInfo stocate paddingBottom>
        <Container fluid>
          <Cover stocate>
            <Hero></Hero>
          </Cover>
        </Container>

        <Container>
          <Column>
            <Description title>Stocate</Description>
            <Description>
              I completed a 5-month internship as a product designer at Stocate.
              At Stocate, my impact is most clearly seen from the{" "}
              <span className="Bold">
                systems that I designed to aid in the growth and scalability{" "}
              </span>{" "}
              of the product. I continue to work with the Stocate team.
            </Description>
            <Explanation>
              Stocate connects local and sustainable businesses with customers.
              Stocate is interested in giving users information about their
              products to allow people to buy more sustainably.
            </Explanation>
          </Column>

          <Grid>
            <Column infoFour>
              <ProjectInfo>Role</ProjectInfo>
              <ProjectInfoDetails> UI &#38; UX</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Platform</ProjectInfo>
              <ProjectInfoDetails>Mobile &#38; Desktop</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Timeline</ProjectInfo>
              <ProjectInfoDetails>2022, Apr to Aug</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Team</ProjectInfo>
              <ProjectInfoDetails>Myself</ProjectInfoDetails>
              <ProjectInfoDetails>Amritpal Singh</ProjectInfoDetails>
              <ProjectInfoDetails>Joey Koay</ProjectInfoDetails>
            </Column>
          </Grid>
        </Container>
      </ContentInfo>

      <Container>
        <Grid center>
          <Column textMidLeft>
            <Header>Leading An 8-Week Plan</Header>
            <Text>
              During my internship, I was tasked with{" "}
              <span className="Bold">
                creating goals and managing the actualization
              </span>{" "}
              of these goals through the product and development teams. These
              were the goals, in order of importance:
            </Text>
            <List>
              <Item>
                Goal 1: Having a 2 Week Turnaround on receiving and designing
                for feedback.
              </Item>
              <Item>Goal 2: Receive 20 new user feedbacks per week.</Item>
              <Item>Goal 3: Maintain 50 active users.</Item>
            </List>
          </Column>

          <Column imageMidRight></Column>

          <Column imageFull>
            <Image8Week></Image8Week>
          </Column>

          <Column imageMidLeft></Column>

          <Column textMidRight>
            <Header>Building A Scalable Design System</Header>
            <Text>
              To meet our mission of creating customer centered design
              solutions, we needed to receive and respond to customer needs
              within the applications as quickly as we can. One of the systems I
              built to aid in this process was the design system. It was built
              to{" "}
              <span className="Bold">
                aid in the speed of designing and implementing
              </span>{" "}
              for pages within the mobile and desktop applications. The process
              of building the system was very iterative because the system was
              constantly growing.
            </Text>
          </Column>

          <Column imageFull>
            <ImageSystem></ImageSystem>
          </Column>

          <Column textHeading>
            <Header>
              Typography, Colours <br></br> &#38; Components
            </Header>
          </Column>

          <Column>
            <Text>
              Before I started my internship, a style guide was created to lay
              the groundwork for the design system that I built. The groundwork
              consisted of the primary teal, that was used in the logo, and a
              few typographic styles that were not yet documented.
            </Text>
          </Column>

          <Column imageFull>
            <ImageSystem2></ImageSystem2>
          </Column>

          <Column textMidLeft>
            <Header>Streamlining the Feedback Pipeline</Header>
            <Text>
              Another one of the systems I helped build to aid in process of
              creating customer centered design solutions was the feedback
              dashboard. The feedback dashboard is an{" "}
              <span className="Bold">
                end-to-end process for receiving customer problems and creating
                user centered solutions.
              </span>{" "}
              It was created to organize the excess of customer feedback
              received directly from the application and feedback received from
              user testing. It allowed us to prioritize feedback on a scale of
              1-5, as well as group similar feedbacks.
            </Text>
          </Column>

          <Column imageMidRight></Column>

          <Column imageMidLeft></Column>

          <Column textMidRight>
            <Header>Improving Core Features</Header>
            <Text>
              Generating design solutions for user problems within the mobile
              application was one of my main tasks at Stocate. With the
              <span className="Bold">
                {" "}
                customer at the core of our design philosophy,
              </span>{" "}
              the process of arriving at a final design solution was very
              iterative. The process we used for creating design solutions was
              the <span className="Bold">Agile sprint methodology,</span> with
              our sprints lasting around 1 to 2 weeks each. Our goal from the
              sprints was to improve the core features of our applications, in
              order to retain active users.
            </Text>
          </Column>

          <Column imageFull>
            <ImageAdding></ImageAdding>
          </Column>

          <Column textMidLeft>
            <Header>Iterating on Design Solutions</Header>
            <Text>
              Improved user journeys within the application were created by
              <span className="Bold">
                {" "}
                conducting extensive user testing.
              </span>{" "}
              Using the personas and product research, we were able to decide
              what questions to ask and during our user testing and maximize our
              information gathered.
            </Text>
          </Column>

          <Column imageMidRight></Column>

          <Column imageLeft>
            <ImageUserA></ImageUserA>
          </Column>

          <Column imageRight>
            <ImageUserB></ImageUserB>
          </Column>
        </Grid>
      </Container>

      <ContentInfo stocate paddingTop paddingBottom>
        <Container fluid>
          <Container>
            <Grid>
              <Column listLeft>
                <Header>Reflection</Header>
                <Text>
                  Working at Stocate was like when they say to always{" "}
                  <span className="Bold">
                    work with people smarter than yourself.
                  </span>{" "}
                  It paid off in the amount of growth i've had as a designer and
                  as a member of a product team. Working closely with a
                  development team made the importance of communication that
                  much more crucial. I was able to hone my skills in planning
                  and presenting ideas to stakeholders. Getting experience{" "}
                  <span className="Bold">
                    creating human centered design solutions{" "}
                  </span>{" "}
                  helped me better understand how to juggle user wants versus
                  needs.
                </Text>
              </Column>
            </Grid>
          </Container>
        </Container>
      </ContentInfo>
    </div>
  );
}

export default Stocate;
