import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Background = styled.div`
  background-color: #898799;
  height: 50vh;
  width: 100vw;
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
`;

export const CV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Experience = styled.div`
  height: auto;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const Role = styled.div`
  font-weight: 500;
`;

export const Company = styled.div``;

export const Right = styled.div``;

export const Year = styled.div`
  font-weight: 500;
`;
