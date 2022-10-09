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
  Icon,
} from "../styles/componentStyles/header.styles";

export default function Header() {
  return (
    <div>
      <Container fluid>
        <Wrapper>
          <Navigation
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 100,
              delay: 2.45,
            }}
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

            <a href="https://www.behance.net/karenamistry" target="_blank">
              Archived Works
            </a>

            <StyledLink to="/Contact">Get in Contact</StyledLink>
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
}
