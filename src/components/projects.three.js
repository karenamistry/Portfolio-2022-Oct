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
            <Work stocate>
              <StyledLink to="/Stocate"> </StyledLink>
            </Work>
            <Work expedite>
              <StyledLink to="/Expedite"> </StyledLink>
            </Work>
            <Work beacons>
              <StyledLink to="/Beacons"> </StyledLink>
            </Work>
          </Grid>
        </Background>
      </Container>
    </div>
  );
}

export default ProThree;
