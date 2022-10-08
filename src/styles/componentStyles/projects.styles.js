import styled, { css } from "styled-components";
import Beacons from "../../assets/workBeacons/smartphone-beacons-f.png";
import Stocate from "../../assets/workStocate/smartphone-stocate-i.png";
import Expedite from "../../assets/workExpedite/smartphone-expedite-e.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Absolute = styled.div`
  position: absolute;
  bottom: 2rem;
  bottom: 0rem;
  width: 100vw;
  height: fit-content;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  z-index: 101;
`;

export const Image = styled(motion.div)`
  position: relative;
  z-index: 100;
  width: 100%;
  background-position: top;
  background-size: cover;
  height: 50vh;

  // height: 48vh;

  ${(props) =>
    props.stocate &&
    css`
      background-image: url(${Stocate});
      background-size: 70%;
      background-repeat: no-repeat;

      // background-size: 82%;

      background-size: 66%;
    `}
  ${(props) =>
    props.expedite &&
    css`
      background-image: url(${Expedite});
      background-size: 76%;
      background-repeat: no-repeat;

      // background-size: 92%;

      background-size: 74%;
    `}
  ${(props) =>
    props.beacons &&
    css`
      background-image: url(${Beacons});
      background-size: 62%;
      background-repeat: no-repeat;

      // background-size: 74%;

      background-size: 60%;
    `}
`;

export const Box = styled.div`
  height: 50vh;
  z-index: 99;
  //  aspect-ratio: 1;
  // height: 52vh;
  // border-radius: 100%;

  ${(props) =>
    props.beacons &&
    css`
      background-color: #1f2126;
      color: #c0c0c0;
    `}
  ${(props) =>
    props.stocate &&
    css`
      background-color: #007c99;
      color: #b9dde6;

      background-color: #004047;
    `}
  ${(props) =>
    props.expedite &&
    css`
      background-color: #f7f9fa;
      color: #007fbf;
    `}
`;
