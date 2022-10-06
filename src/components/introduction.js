import React from "react";
import {
  Text,
  Span,
  Background,
} from "../styles/componentStyles/introduction.styles";
import { Container } from "../styles/globalStyles";

function Introduction() {
  return (
    <div>
      <Background>
        <Span>
          <Text>
            <span className="Bold"> Hello, I'm Karena! </span>I create
            thoughtful digital interfaces, that aim to understand the people
            using them. I have 4+ years designing for startups in Ottawa,
            Toronto &#38; Montreal. Please see my featured works below.
          </Text>
        </Span>
      </Background>
    </div>
  );
}

export default Introduction;
