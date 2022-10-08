import styled, { css } from "styled-components";
import Stocate from "../../assets/workStocate/smartphone-stocate-b.png";
import Expedite from "../../assets/workExpedite/smartphone-expedite-b.png";
import Beacons from "../../assets/workBeacons/smartphone-beacons-c.png";
import { Link } from "react-router-dom";

export const Background = styled.div`
  width: 100vw;
  height: 60vh;

  position: absolute;
  bottom: 0;
  overflow: hidden;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 60vh;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Work = styled.div`
  width: 100%;

  ${(props) =>
    props.stocate &&
    css`
      background-image: url(${Stocate});
      background-size: cover;
      background-position: center;
    `}
  ${(props) =>
    props.expedite &&
    css`
      background-image: url(${Expedite});
      background-size: cover;
      background-position: center;
    `}
  ${(props) =>
    props.beacons &&
    css`
      background-image: url(${Beacons});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
