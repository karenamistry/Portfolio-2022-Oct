import styled, { css } from "styled-components";

import Access from "../assets/workBeacons/beacons-accessibility.png";
import Intro from "../assets/workExpedite/smartphone-expedite-b.png";
import Color from "../assets/workExpedite/systemColours.png";
import Component from "../assets/workExpedite/systemComponents.png";

//

export const ImageComponent = styled.div`
  width: 50%;
  aspect-ratio: 1;
  background-image: url(${Component});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
`;

export const ImageColours = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-image: url(${Color});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 0.25px solid lightgray;
`;

export const ImageIntro = styled.div`
  width: 100%;
  aspect-ratio: 2.5;
  background-image: url(${Intro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;

export const ImageAccess = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-image: url(${Access});
  background-size: cover;
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: top;
  // background-color: red;
`;
