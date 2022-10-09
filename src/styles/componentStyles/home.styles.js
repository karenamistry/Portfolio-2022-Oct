import styled, { css } from "styled-components";
import Avi from "../../assets/aboutPage/me-standing-cropped.jpg";
import { motion } from "framer-motion";

export const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #3d4e66;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //Large outside container
`;

export const Wrap = styled(motion.div)`
  // wrap holding all text and image
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -8rem;
`;

export const Name = styled(motion.div)`
  display: flex;
  justify-content: center;

  // Name: Whole
`;

export const Words = styled(motion.div)`
  font-size: 10vh;
  font-size: 2.182rem;
  font-weight: 500;
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
  font-size: 6vh;
  font-size: 1.45rem;
  font-weight: 500;
  color: #cac9d1;
  line-height: 118%;

  width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 2rem;
`;
