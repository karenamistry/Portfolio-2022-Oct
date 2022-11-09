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
          <Column textLeft>
            <Header>Managing Goals</Header>
            <Text>
              During my internship, I was given the opportunity to create goals
              for the product and manage the actualization of these goals
              through the product and development teams. These were the goals I
              set, in order of importance:
            </Text>
            <List>
              <Item>
                Goal 1: Having a 2 Week Turnaround on receiving and designing
                for feedback.
              </Item>
              <Item>Goal 2: Receive 20 new user feedbacks per week.</Item>
              <Item>Goal 3: Maintain 50 active users.</Item>
            </List>
            <Text>
              These goals were actualized through the completion of the
              following solutions and systems I built during my internship.
            </Text>
          </Column>
          <Column imageRight>
            <Image8Week></Image8Week>
          </Column>

          <Column imageLeft></Column>
          <Column textMidRight>
            <Header>Design Challenge?</Header>
            <Text>
              How do we create customer centered UI solutions to aid the buying
              experience of sustainable products?
            </Text>
          </Column>
          <Column textMidLeft>
            <Header>Improving Core Features</Header>
            <Text>
              Generating design solutions for user problems within the mobile
              application was one of my main tasks at Stocate. We wanted to
              strengthen our core features
            </Text>
          </Column>
          <Column imageRight></Column>
          <Column imageLeft></Column>
          <Column textRight>
            <Header>Parsing User Problems</Header>
            <Text>
              Using a backlog of user data obtained from prior user testing and
              in-app feedback, I was able to organize and sort of over 180 user
              comments from separate users concerning the initial versions of
              the Stocate mobile and web applications. We were looking to parse
              the most crucial problems users were having in our applications,
              so we could prioritize them when building solutions.
            </Text>
          </Column>
          <Column textLeft>
            <Header>User Interviews</Header>
            <Text>
              Learning about the user is integral to my design process. I
              conducted a variety of user interviews to get information about
              our primary and secondary user personas. These interviews provided
              us with a) user's thoughts concerning the core use cases for the
              application, because we were still in the process of solidifying
              our primary product goal. b) Their general thoughts on the
              interface likes and dislikes. Interviews did not reach the
              specificity of user testing. c) As well as features they would
              like to see in the application. Interviews provided information to
              narrow down our personas, core problems and get us in contact with
              potential users.
            </Text>
            <Text>
              I organized all the data by type of problem, section of the app it
              concerned, completion status of of that feedback, & team that
              could work on the solution. This was initially done in an excel
              document to test the benefits of this organization. We intended to
              develop a dashboard system to organize incoming feedback in
              realtime. I designed a interface solution based on the
              organizational structure of the excel document. This dashboard is
              in the development stage.
            </Text>
          </Column>
          <Column imageRight>
            <ImageUserA></ImageUserA>
          </Column>
          <Column imageLeft></Column>
          <Column textMidRight>
            <Header>HMW & Managing Tasks</Header>
            <Text>
              Once we understood user feedback, we were able to prioritize
              solving for crucial interface and experience flaws in the design
              of the desktop and mobile application. We brainstormed and
              discussed potential solution routes about how we might go about
              solving for these core problems. We were able to narrow our core
              problems to specific users flows in the application that needed
              improvement.The mobile application was where we started this
              development. The user flows we planned sprints for were:
              Onboarding, Adding, Messaging, & Transactions.
            </Text>
          </Column>
          <Column textMidLeft>
            <Header>Process</Header>
            <Text>
              With the customer at the core of our design philosophy, the
              process of arriving at a final design solution was very iterative.
              The process we used for creating design solutions was the Agile
              sprint methodology, with our sprints lasting around 1 to 2 weeks
              each. Our goal from the sprints was to improve the core features
              of our applications, in order to retain active users.
            </Text>
          </Column>
          <Column imageRight></Column>
          <Column imageLeft></Column>
          <Column textMidRight>
            <Header>User Flow Diagrams</Header>
            <Text>
              Our team worked to make user flow diagrams for the entire
              application, because that documentation was not yet in place. We
              diagrammed the user flows in figma, so we could visualize the
              prototype more clearly, in our mobile application. Before starting
              the design process, mapping user flows helped us figure out where
              improvements could be made.
            </Text>
          </Column>
          <Column textMidLeft>
            <Header>Mockups & Prototyping</Header>
            <Text>
              Our MVP already existed, my job was to bring the MVP to a more
              definite and concise model. During this stage in the process, I
              was able to iterate upon our design system. The design system was
              not yet built during the begging of my internship, so I created
              components as they were needed. I later created a more concise and
              documented design system to improve the speed of creating mid and
              high fidelity mockups and prototypes.
            </Text>
          </Column>
          <Column imageRight></Column>

          <Column imageLeft>
            <ImageUserB></ImageUserB>
          </Column>
          <Column textRight>
            <Header>User Testing</Header>
            <Text>
              User testing was conducted to improve clarity, speed and enjoyment
              for users within specific user flows. User testing was conducted
              for each sprint during the mid fidelity stage. Once users provided
              us with their feedback, we moved to the high fidelity stage, where
              all flaws and details were ironed out.
            </Text>
            <Text>
              I conducted user testing bi-weekly with different users, during
              sprints for our mobile application. User testing sessions were a
              mix of in-person and via Zoom. They each lasted about 30 mins. The
              first section of the session would be an interview with the user,
              to help build our personas and understand user perspectives. In
              the second section, users would walk me through their experience
              with our Figma prototype. During this portion, I am able to focus
              in on roadblocks users have during specific areas of the
              application.
            </Text>
          </Column>

          <Column textLeft>
            <Header>Iterating</Header>
            <Text>
              Improved user journeys within the application were created by
              conducting extensive user testing and iterating afterwards. After
              user testing a user flow or a feature, I would return to
              prototyping in Figma to resolve problems or challenges users had
              brought up. For most features, iterating once or twice was enough,
              but larger user flows required three or four iterations. This was
              the case when designing for the adding flows because it was a more
              complex problem to solve for.
            </Text>
          </Column>
          <Column imageRight>
            <ImageAdding></ImageAdding>
          </Column>

          <Column imageRight></Column>

          <Column imageLeft></Column>
          <Column textRight>
            <Header>Building A Scalable Design System</Header>
            <Text>
              To meet our mission of creating customer centered design
              solutions, we needed to receive and respond to customer needs
              within the applications as quickly as we can. One of the systems I
              built to aid in this process was the design system. It was built
              to aid in the speed of designing and implementing for pages within
              the mobile and desktop applications. The process of building the
              system was very iterative because the system was constantly
              growing.
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
          <Column textLeft>
            <Header>Streamlining the Feedback Pipeline</Header>
            <Text>
              Another one of the systems I helped build to aid in process of
              creating customer centered design solutions was the feedback
              dashboard. The feedback dashboard is an end-to-end process for
              receiving customer problems and creating user centered solutions.
              It was created to organize the excess of customer feedback
              received directly from the application and feedback received from
              user testing. It allowed us to prioritize feedback on a scale of
              1-5, as well as group similar feedbacks.
            </Text>
          </Column>
          <Column imageRight></Column>
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
