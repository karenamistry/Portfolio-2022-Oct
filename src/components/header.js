import React from "react";
//
import { Container } from "../styles/globalStyles";
import {
  Navigation,
  Wrapper,
  StyledLink,
  Span,
  Works,
  Click,
} from "../styles/componentStyles/header.styles";

export default function Header() {
  return (
    <div>
      <Container fluid>
        <Wrapper>
          <Navigation
            transition={{ duration: 1.25, type: "linear" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <StyledLink to="/" Name>
              Karena Mistry
            </StyledLink>
            <Span>
              Featured Works
              <Works>
                <Click>
                  <StyledLink to="/Stocate">Stocate</StyledLink>
                </Click>
                <Click>
                  <StyledLink to="/Expedite">Expedite</StyledLink>
                </Click>
                <Click>
                  <StyledLink to="/Beacons">Beacons</StyledLink>
                </Click>
              </Works>
            </Span>
            <StyledLink to="/About">Archive</StyledLink>
            <StyledLink to="/">Get in Contact</StyledLink>
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
}
