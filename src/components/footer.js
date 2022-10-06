import React from "react";

import { Container } from "../styles/globalStyles";
import {
  Background,
  CV,
  Role,
  Company,
  Year,
  Experience,
  Left,
  Right,
} from "../styles/componentStyles/footer.styles";

function Footer() {
  return (
    <div>
      <Background>
        <CV fluid>
          <Experience>
            <Left>
              <Role>Product Designer, Internship</Role>
              <Company>Stocate</Company>
            </Left>
            <Right>
              <Year>2022 - Current</Year>
            </Right>
          </Experience>
          <Experience>
            <Left>
              <Role>Product Designer, Freelance</Role>
              <Company>Dynamics CXS</Company>
            </Left>
            <Right>
              <Year>2021 - Current</Year>
            </Right>
          </Experience>
          <Experience>
            <Left>
              <Role>Content Strategist</Role>
              <Company>Instasnacks</Company>
            </Left>
            <Right>
              <Year>2021 - 2022</Year>
            </Right>
          </Experience>
          <Experience>
            <Left>
              <Role>Content Strategist</Role>
              <Company>Casper Kitchen</Company>
            </Left>
            <Right>
              <Year>2021 - 2022</Year>
            </Right>
          </Experience>
          <Experience>
            <Left>
              <Role>Graphic Designer</Role>
              <Company>Lil Helper</Company>
            </Left>
            <Right>
              <Year>2018 - 2019</Year>
            </Right>
          </Experience>
          <Experience>
            <Left>
              <Role>Graphic Designer</Role>
              <Company>York U Printing</Company>
            </Left>
            <Right>
              <Year>2017 - 2018</Year>
            </Right>
          </Experience>
          <Experience>
            <Left>
              <Role>Cash</Role>
              <Company>Canadian Tire</Company>
            </Left>
            <Right>
              <Year>2016</Year>
            </Right>
          </Experience>
        </CV>
      </Background>
    </div>
  );
}

export default Footer;
