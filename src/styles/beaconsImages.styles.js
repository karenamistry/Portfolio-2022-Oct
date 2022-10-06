import styled, { css } from "styled-components";

import Access from "../assets/workBeacons/beacons-accessibility-2.png";
import Onboard from "../assets/workBeacons/beacons-onboarding-a.png";
import Request from "../assets/workBeacons/beacons-requests-c.png";
import Achieve from "../assets/workBeacons/beacons-achievements-c.png";
import Edit from "../assets/workBeacons/beacons-editing.png";

//

import Goals from "../assets/workBeacons/goals.jpg";
import Interview from "../assets/workBeacons/goals2.jpg";
import Competition from "../assets/workBeacons/competition.png";
import Journey from "../assets/workBeacons/journeys.png";
import Sketches from "../assets/workBeacons/sketches.jpeg";
import Proto from "../assets/workBeacons/iterations.jpeg";
import TestA from "../assets/workBeacons/testingA.jpeg";
import TestB from "../assets/workBeacons/testingB.jpeg";
import Final from "../assets/workBeacons/final.svg";

export const ImageAccess = styled.div`
  width: 100%;
  aspect-ratio: 1.6;
  background-image: url(${Access});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  justify-content: space-around;
  color: #898799;
  // background-color: red;
`;

export const ImageOnboard = styled.div`
  width: 75%;
  aspect-ratio: 1;
  background-image: url(${Onboard});
  background-size: cover;
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: top;
  margin: auto;
  // background-color: red;
`;

export const ImageRequest = styled.div`
  width: 100%;
  aspect-ratio: 2;
  background-image: url(${Request});
  background-size: cover;
  background-size: 125%;
  background-repeat: no-repeat;
  background-position: center;
  //  background-color: red;
`;

export const ImageAchieve = styled.div`
  width: 100%;
  margin: auto;
  aspect-ratio: 0.75;
  background-image: url(${Achieve});
  background-size: cover;
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: bottom;
  margin: auto;
  // background-color: red;
`;

export const ImageEdit = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-image: url(${Edit});
  background-size: cover;
  background-size: 300%;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;

  // background-color: red;
`;

//

export const ImageinStore = styled.div`
  width: 100%;
  aspect-ratio: 1.5;
  background-image: url(${Goals});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageinStore2 = styled.div`
  width: 100%;
  aspect-ratio: 1.5;
  background-image: url(${Interview});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const ImageCompetition = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-image: url(${Competition});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageJourney = styled.div`
  width: 50%;
  aspect-ratio: 1;
  background-image: url(${Journey});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
`;

export const ImageSketches = styled.div`
  width: 100%;
  aspect-ratio: 1.25;
  background-image: url(${Sketches});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageProto = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background-image: url(${Proto});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageTestA = styled.div`
  width: 100%;
  aspect-ratio: 2.5;
  background-image: url(${TestA});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 1rem;
`;
export const ImageTestB = styled.div`
  width: 100%;
  aspect-ratio: 2.5;
  background-image: url(${TestB});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ImageFinal = styled.div`
  width: 100%;
  aspect-ratio: 2;
  background-image: url(${Final});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  margin: auto;
`;
