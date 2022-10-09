import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1076px;
  margin: auto;
  overflow-x: hidden;

  ${(props) =>
    props.fluid &&
    css`
      max-width: 100vw;
    `}

  @media (width: 1000px) {
    // max-width: 800px;
  }
`;

export const Cursor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: #0b0327;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1002;
  //  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
`;
