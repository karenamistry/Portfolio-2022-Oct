import React from "react";

import {
  Background,
  Text,
  Flex,
  Title,
  Links,
  StyledLink,
} from "../styles/contact.styles";

import { Container } from "../styles/globalStyles";

function Contact() {
  return (
    <div>
      <Background>
        <Title>Get in Touch With Karena!</Title>
        <Flex>
          <Links>
            <Text>📧</Text>
            <Text>
              <a href="mailto:k.mistry1898@gmail.com" target="_blank">
                k.mistry1898@gmail.com
              </a>
            </Text>
          </Links>

          <Links>
            <Text>📸</Text>
            <Text>
              <a
                href="https://www.instagram.com/karena_mistry/"
                target="_blank"
              >
                Instagram
              </a>
            </Text>
          </Links>

          <Links>
            <Text>⛓</Text>
            <Text>
              <a href="https://www.behance.net/karenamistry" target="_blank">
                Behance
              </a>
            </Text>
          </Links>
        </Flex>
      </Background>
    </div>
  );
}

export default Contact;
