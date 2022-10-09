import styled from "styled-components";
import Avi from "../../assets/aboutPage/me-standing-cropped.jpg";

import { motion } from "framer-motion";

export const BackgroundAll = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7f7fc;
`;

export const Background = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #898799;
  color: #f7f7fc;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  text-align: center;

  //profile container
`;

export const Avatar = styled(motion.div)`
  background-color: #898799;
  height: 125px;
  margin: auto;
  aspect-ratio: 1;

  background-image: url(${Avi});
  background-size: 110%;
  background-position: center;
  border-radius: 100%;

  margin-bottom: 1rem;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 3.182rem;
  // padding-bottom: 0.25rem;

  display: flex;
  justify-content: center;
`;

export const Quote = styled.div`
  padding: 0rem 4rem;
  font-weight: 500;
  font-size: 1.45rem;
  // color: #cac9d1;
  line-height: 130%;
`;

export const MotionA = styled(motion.div)``;

export const MotionB = styled(motion.div)`
  padding-left: 0.5rem;
`;
export const MotionC = styled(motion.div)`
  padding-left: 0.5rem;
`;
