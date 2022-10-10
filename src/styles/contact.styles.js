import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Background = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3d4e66;
  gap: 2rem;
  font-weight: 500;
`;

export const Flex = styled(motion.div)`
  display: flex;
`;

export const Text = styled(motion.div)`
  color: #cac9d1;
  font-size: 1.45rem;
  line-height: 118%;
  margin-right: 1rem;
`;

export const Title = styled(motion.div)`
  font-size: 2.182rem;
  color: #f7f7fc;
`;

export const Links = styled(motion.div)`
  display: flex;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.light};
  font-weight: 600;
  text-decoration: none;
`;
