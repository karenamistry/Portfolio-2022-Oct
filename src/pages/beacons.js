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
  Flex,
} from "../styles/work.styles";

import {
  ImageAccess,
  ImageOnboard,
  ImageRequest,
  ImageAchieve,
  ImageEdit,
  ImageinStore,
  ImageinStore2,
  ImageCompetition,
  ImageJourney,
  ImageSketches,
  ImageProto,
  ImageTestA,
  ImageTestB,
  ImageFinal,
} from "../styles/beaconsImages.styles";

function Beacons() {
  return (
    <div>
      <ContentInfo beacons paddingBottom>
        <Container fluid>
          <Cover beacons>
            <Hero></Hero>
          </Cover>
        </Container>

        <Container>
          <Column>
            <Description title>CX Beacons</Description>
            <Description>
              This project started as a case study, but I later worked with
              Dynamics CXS to bring these solutions to development for their
              Beacons product. I redesigned their previous interface to{" "}
              <span className="Bold">
                improve user journeys, adjust for accessibility and build a
                design system.
              </span>
            </Description>
            <Explanation>
              Beacons increases the efficiency of sales floors in large retail
              stores. Press a button and an employee gets a notification! This
              product is being used in the{" "}
              <span className="Bold">
                Canadian Tire Kanata, Ottawa and Halton Hills, GTA stores.{" "}
              </span>
            </Explanation>
          </Column>

          <Grid>
            <Column infoFour>
              <ProjectInfo>Role</ProjectInfo>
              <ProjectInfoDetails>UR, UI &#38; UX</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Platform</ProjectInfo>
              <ProjectInfoDetails>Mobile</ProjectInfoDetails>
            </Column>
            <Column infoFour>
              <ProjectInfo>Timeline</ProjectInfo>
              <ProjectInfoDetails>2022, Jan to Feb</ProjectInfoDetails>
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
          <Column textMidLeft>
            <Header>Accessability Adjustments</Header>
            <Text>
              Providing large font sizes and more contrast makes the new
              interface better equipped to function for all employees.
            </Text>
          </Column>

          <Column imageLarge>
            <ImageAccess>
              <Flex>Before</Flex>
              <Flex>After</Flex>
            </ImageAccess>
          </Column>

          <Column textMidRight>
            <Header>Addition of Onboarding</Header>
            <Text>
              When an employee is first greeted by the application, they are
              asked about their goals so that we can better suit the application
              to its target audience.
            </Text>
          </Column>

          <Column imageFull>
            <ImageOnboard></ImageOnboard>
          </Column>

          <Column textHeading>
            <Header>Improving the Customer Request Journey</Header>
          </Column>

          <Column>
            <Text>
              Telling employees where and when the button was pressed, as well
              as if their coworkers are already occupied with customers.
              Improving how an employee receives requests when customers press
              the beacons button.
            </Text>
          </Column>

          <Column imageFull>
            <ImageRequest></ImageRequest>
          </Column>

          <Column imageMidLeft>
            <ImageAchieve></ImageAchieve>
          </Column>

          <Column textMidRight>
            <Header>Emphasis on Personal Achievements</Header>
            <Text>
              The previous system of having a customer experience score for the
              entire store was impersonal and did not do anything to encourage
              employee success. By implementing a personal badge and level
              system for retail employees, they are able to see their
              progression separate from their store success and their coworkers.
            </Text>
          </Column>

          <Column textMidLeft>
            <Header>Simplified Editing</Header>
            <Text>
              Organizing beacon buttons by department and SKU, which can be
              searched, makes it easier to find and edit beacons on-the-go.
              Previously, all the beacons were all listed together. The icons
              also work to provide more clarity.
            </Text>
          </Column>

          <Column imageMidRight>
            <ImageEdit></ImageEdit>
          </Column>
        </Grid>

        <Grid center>
          <Column textHeading>
            <Header>Research Process &#38; Design Goals</Header>
          </Column>

          <Column>
            <Text>
              Beacons was created with the goal of enhancing the customer to
              employee service experience, not eliminating it. My goal was to
              expand the reach of the beacons app to more retail stores by
              <span className="Bold">
                {" "}
                creating a design that was more clearly emphasizes employee
                success, over retailer success alone.
              </span>
            </Text>
          </Column>

          <Column imageFull>
            <ImageinStore></ImageinStore>
          </Column>

          <Column textMidLeft>
            <Header>Conducting Interviews</Header>
            <Text>
              I started researching by interviewing employees at the Canadian
              Tire Kanata store to learn the application from their perspective.
              I did this to{" "}
              <span className="Bold"> learn about pain points</span> within the
              user journeys. For example, I learned that there was a divide
              between older and younger employees due to ease of use of the app.
              Some questions I asked were as such:
            </Text>
            <List>
              <Item>What do you consider pros and cons?</Item>
              <Item>
                What was the previous system used to answer customer requests?
              </Item>
              <Item>
                Can you walk me through your regular use cases of the app?
              </Item>
            </List>
          </Column>

          <Column imageMidRight></Column>

          <Column imageMidLeft></Column>

          <Column textMidRight>
            <Header>Asking Questions </Header>
            <Text>
              I started the designing process by asking "How Might We" questions
              while listening back to my interviews. I jotted down notes and
              questions related to{" "}
              <span className="Bold">changes, features and ideas</span> that
              could potentially be implemented.
            </Text>
          </Column>

          <Column textMidLeft>
            <Header>Analyzing Competition</Header>
            <Text>
              Analyzing applications competitive with Beacons was a{" "}
              <span className="Bold">roadblock </span>I faced, because most
              similar products require consultation to get access. I was able to
              <span className="Bold"> research features</span> of the two
              competitor products. The first Synq Order Up, is used specifically
              for expensive lockup items that require employee intervention to
              purchase. Acuity Playbook is more similar to Beacons, except it
              suggests paths for employees to take in order to successfully sell
              product.
            </Text>
          </Column>

          <Column imageFull>
            <ImageinStore2></ImageinStore2>
          </Column>

          <Column textMidLeft>
            <Header>Mapping User Journeys</Header>
            <Text>
              One of{" "}
              <span className="Bold">
                {" "}
                my goals during this redesign was to improve the user journeys
              </span>{" "}
              within the application. I started by mapping the users stories in
              the application to better understand them. The biggest change I
              made to the mapping of the application was changing the landing
              page to better suit the needs of employees.
            </Text>
          </Column>

          <Column imageMidRight></Column>

          <Column textMidRight>
            <Header>Building Realistic Personas</Header>

            <Text>
              I was able to build realistic personas that were based off the
              employees that I had interviewed. I created two personas that
              represented the <span className="Bold">two types of users</span>{" "}
              that I had to accommodate.
            </Text>
          </Column>

          <Column textMidLeft>
            <Header>Getting ideas on paper</Header>

            <Text>
              Sketching basic UI ideas was an easy way for me to test how they
              would work in the complete user journey before committing to
              prototyping. After sketching, I moved to low and mid fidelity
              mockups.
            </Text>
          </Column>

          <Column imageFull>
            <ImageSketches></ImageSketches>
          </Column>

          <Column textMidRight>
            <Header>Prototyping</Header>
            <Text>
              I began prototyping the main customer request user flow first,
              meaning how does an employee respond to a customer presses a
              button. I created{" "}
              <span className="Bold">
                two different iterations for completing this flow.
              </span>{" "}
              The reason I did this was because I wasn't sure what would be
              valued more by the user. Prioritizing in progress requests or
              prioritizing the escalated requests? I knew{" "}
              <span className="Bold">
                I could verify this with A/B testing.{" "}
              </span>
              There were also other UI differences between the iterations that I
              could also get user's thoughts and preferences. After A/B testing
              the customer request user flow, I was able to build the rest of
              the pages in the app around.
            </Text>
          </Column>

          <Column imageFull>
            <ImageProto></ImageProto>
          </Column>

          <Column textMidLeft>
            <Header>User Testing</Header>
            <Text>
              I scheduled in-person user testing meeting with the same employees
              at Canadian Tire that I had previously interviewed to user test
              the user journey for creating a customer request. My user testing
              lasted about 20 mins, and consisted of me{" "}
              <span className="Bold">
                letting users find their way around the designed prototype{" "}
              </span>
              and provide me with their thoughts.
            </Text>
          </Column>

          <Column imageFull>
            <ImageTestA></ImageTestA>
            <ImageTestB></ImageTestB>
          </Column>

          <Column imageLeft></Column>

          <Column textMidRight>
            <Header>Iterating</Header>
            <Text>
              After user testing and iterating, I was able to use the feedback
              to iterate and narrow in on a final prototype. One of the major
              changes I made after user testing was the addition of an
              inprogress state for requests. This made it possible for employees
              to know, at a glance, who is already busy with a request. If they
              would like more information, like what specific SKU employees are
              busy with, users can visit the inprogress page.
            </Text>
          </Column>
        </Grid>
      </Container>

      <ContentInfo beacons paddingTop paddingBottom>
        <Container fluid>
          <Container>
            <Grid>
              <Column listLeft>
                <Header>Reflection</Header>
                <Text>
                  I started this project as a case study, to further my UI and
                  UX skills, but I was able to work with Dynamics and learn far
                  more than I had anticipated. I found this product so
                  interesting because it concerns the user journey of both the
                  user and the customer. My skills in prototyping, user testing
                  and iterating have vastly improved since working on this
                  project.
                </Text>
              </Column>
            </Grid>
          </Container>
        </Container>
      </ContentInfo>
    </div>
  );
}

export default Beacons;
