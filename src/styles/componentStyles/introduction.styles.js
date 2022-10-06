import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-color: #f7f7fc;
`;

export const Span = styled.div`
  width: 100vw;
  height: 50vh;
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(motion.div)`
  // margin-top: 6rem;
  max-width: 1076px;
  color: #120b2e;
  font-size: 1.45rem;
  font-weight: 500;
  line-height: 140%;
`;
