import styled, { css } from "styled-components";
import Avi from "../../assets/aboutPage/me-standing-cropped.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Stocate from "../../assets/workStocate/smartphone-stocate-j.png";
import Expedite from "../../assets/workExpedite/smartphone-expedite-e.png";
import Beacons from "../../assets/workBeacons/smartphone-beacons-c.png";

export const Background = styled(motion.div)`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.first &&
    css`
      height: 100vh;
      background-color: #3d4e66;
    `}

  ${(props) =>
    props.second &&
    css`
      height: auto;
      background-color: #f7f7fc;
      gap: 2rem;
      padding: 8rem 0rem;
    `} //Large outside container
`;

export const Wrap = styled(motion.div)`
  // wrap holding all text and image
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: -8rem;
  font-weight: 500;
`;

export const Name = styled(motion.div)`
  display: flex;
  justify-content: center;

  // Name: Whole
`;

export const Words = styled(motion.div)`
  font-size: 2.182rem;
  // font-size: 3rem;
  color: #f7f7fc;

  margin-right: 0.5rem;

  // Name: 3 sections
`;

export const Avatar = styled(motion.div)`
  height: 125px;
  aspect-ratio: 1;
  background-image: url(${Avi});
  background-size: 110%;
  background-position: center;
  border-radius: 100%;

  margin: auto;
`;

export const Text = styled(motion.div)`
  color: #cac9d1;
  font-size: 1.45rem;
  line-height: 118%;

  width: 500px;

  margin-left: 2rem;
`;

///

export const Width = styled.div`
  max-width: 1076px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Title = styled.div`
  padding: 2rem 0rem;
  font-weight: 500;
  color: #898799;
  display: none;
`;

export const Project = styled.div`
  display: flex;
  gap: 2rem;
  background-color: #cac9d1;
  box-sizing: border-box;
  padding-left: 2rem;
  border-radius: 2rem;

  ${(props) =>
    props.beacons &&
    css`
      background-color: #1f2126;
      color: #c0c0c0;
    `}
  ${(props) =>
    props.stocate &&
    css`
      color: #b9dde6;
      background-color: #004047;
    `}
    ${(props) =>
    props.expedite &&
    css`
      background-color: #007fbf;
      color: #f7f9fa;
    `}
`;

export const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 350px;
  justify-content: center;
`;

export const Works = styled.div`
  background-color: #cac9d1;
  height: 350px;
  aspect-ratio: 2/1.5;
  border-radius: 2rem;

  ${(props) =>
    props.stocate &&
    css`
      background-color: #004047;

      background-image: url(${Stocate});
      background-repeat: no-repeat;
      background-size: cover;
      background-size: 160%;
      background-position: center;
    `}

  ${(props) =>
    props.expedite &&
    css`
      background-color: #007fbf;

      background-image: url(${Expedite});
      background-repeat: no-repeat;
      //background-size: 140%;
      background-size: cover;
      background-position: top;
    `}

  ${(props) =>
    props.beacons &&
    css`
      background-color: #1f2126;

      background-image: url(${Beacons});
      background-repeat: no-repeat;
      background-size: cover;
      //background-size: 120%;
      background-position: center;
    `}
`;

export const Heading = styled.div`
  font-size: 1.425rem;
  font-weight: 600;
`;

export const Description = styled.div`
  line-height: 140%;
`;

export const ProjectInfo = styled.div`
  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.light};
  font-weight: 600;
  text-decoration: none;
`;
