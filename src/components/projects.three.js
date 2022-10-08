import React from "react";
import { Container } from "../styles/globalStyles";
import {
  StyledLink,
  Background,
  Grid,
  Work,
} from "../styles/componentStyles/projects.three.styles";

function ProThree() {
  return (
    <div>
      <Container fluid>
        <Background>
          <Grid>
            <StyledLink to="/Stocate">
              <Work stocate></Work>
            </StyledLink>
            <StyledLink to="/Expedite">
              <Work expedite></Work>
            </StyledLink>
            <StyledLink to="/Beacons">
              <Work beacons></Work>
            </StyledLink>
          </Grid>
        </Background>
      </Container>
    </div>
  );
}

export default ProThree;
