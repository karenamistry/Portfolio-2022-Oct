import styled, { css } from "styled-components";

//

// import Week from "../assets/workStocate/separate.png";
import Week from "../assets/workStocate/smartphone-stocate-e.png";
import SystemA from "../assets/workStocate/designsystem.png";
import SystemB from "../assets/workStocate/designsystemb.png";
import Adding from "../assets/workStocate/adding.png";
import UserA from "../assets/workStocate/usertesting.png";
import UserB from "../assets/workStocate/usertesting-2.png";

export const Image8Week = styled.div`
  width: 100%;
  aspect-ratio: 1.6;
  background-image: url(${Week});
  background-size: cover;
  background-size: 115%;
  background-repeat: no-repeat;
  background-position: center;
  // border-radius: 2rem;
  // background-color: red;
`;

export const ImageSystem = styled.div`
  width: 100%;
  aspect-ratio: 1.5;
  background-image: url(${SystemA});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  // background-color: red;
`;

export const ImageSystem2 = styled.div`
  width: 100%;
  aspect-ratio: 1.75;
  background-image: url(${SystemB});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // background-color: red;
`;

export const ImageAdding = styled.div`
  width: 100%;
  aspect-ratio: 1.75;
  background-image: url(${Adding});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  // background-color: red;
`;

export const ImageUserA = styled.div`
  width: 100%;
  aspect-ratio: 1.25;
  background-image: url(${UserA});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  // background-color: red;
`;

export const ImageUserB = styled.div`
  width: 100%;
  aspect-ratio: 1.25;
  background-image: url(${UserB});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  // background-color: red;
`;

//
