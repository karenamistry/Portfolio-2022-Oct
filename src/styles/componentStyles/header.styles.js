import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Home from "../../assets/aboutPage/home.svg";

export const Wrapper = styled.div`
  z-index: 10001;
  position: fixed;
  width: 100%;
  padding: 1.5rem 8rem;
  box-sizing: border-box;
  bottom: 0;

  font-size: 0.9rem;
  //entire container
`;

export const Navigation = styled(motion.div)`
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  background-color: #f7f7fc;

  background-color: rgba(137, 135, 153, 0.75);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  border-radius: 0.25rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  //floating element
`;

export const Span = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.mid};
`;

export const Works = styled.div`
  display: flex;
  margin-left: 1rem;
`;

export const Click = styled.div`
  padding: 0.5rem 1.5rem;
  margin: 0rem 0.25rem;
  border-radius: 0.15rem;

  background-color: rgba(18, 11, 46, 0.15);

  // backdrop-filter: blur(100px);
  // -webkit-backdrop-filter: blur(100px);
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.light};
  font-weight: 600;
  text-decoration: none;
  ${(props) => props.Name && css``}
`;

export const Icon = styled.div``;
