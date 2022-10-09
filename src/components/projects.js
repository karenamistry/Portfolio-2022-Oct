import React from "react";
import { Container } from "../styles/globalStyles";
import {
  Absolute,
  Grid,
  Box,
  StyledLink,
  Image,
} from "../styles/componentStyles/projects.styles";

function Projects() {
  return (
    <div>
      <Container fluid>
        <Absolute>
          <Grid>
            <StyledLink to="/Stocate">
              <Image
                stocate
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                whileHover={{ y: -20 }}
              ></Image>
            </StyledLink>
            <StyledLink to="/Expedite">
              <Image
                expedite
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                whileHover={{ y: -20 }}
              ></Image>
            </StyledLink>
            <StyledLink to="/Beacons">
              <Image
                beacons
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                whileHover={{ y: -20 }}
              ></Image>
            </StyledLink>
          </Grid>
        </Absolute>

        <Absolute>
          <Grid>
            <Box stocate></Box>
            <Box expedite></Box>
            <Box beacons></Box>
          </Grid>
        </Absolute>
      </Container>
    </div>
  );
}

export default Projects;

// y: -30, scale: 1.05
// ease: [0.1, 1, 1, 1];
// type: "spring", stiffness: 100
