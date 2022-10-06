import styled, { css } from "styled-components";
import Beacons from "../assets/workBeacons/smartphone-beacons-d.png";
import Stocate from "../assets/workStocate/smartphone-stocate-j.png";
import Expedite from "../assets/workExpedite/smartphone-expedite-d.png";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-start;
  gap: 8rem 1rem;
  ${(props) =>
    props.center &&
    css`
      align-items: center;
      margin: 6rem 0rem;
    `}
`;

export const Column = styled.div`
  ${(props) =>
    props.textLeft &&
    css`
      grid-column: 1 / span 4;
    `}
  grid-column: span 4;
  ${(props) =>
    props.textRight &&
    css`
      grid-column: 9 / span 4;
    `}
  ${(props) =>
    props.imageRight &&
    css`
      grid-column: 7 / span 6;
    `}
    ${(props) =>
    props.imageLeft &&
    css`
      grid-column: 1 / span 6;
    `}
    ${(props) =>
    props.textMidLeft &&
    css`
      grid-column: 3 / span 4 !important;
    `}
  ${(props) =>
    props.imageMidRight &&
    css`
      grid-column: 7 / span 6 !important;
    `}
    ${(props) =>
    props.imageMidLeft &&
    css`
      grid-column: 1 / span 6 !important;
    `}
    ${(props) =>
    props.textMidRight &&
    css`
      grid-column: 7 / span 4 !important;
    `}  
    ${(props) =>
    props.textHeading &&
    css`
      grid-column: 4 / span 3;
    `}
    ${(props) =>
    props.hugImageLeft &&
    css`
      grid-column: 1 / span 8;
    `}
    ${(props) =>
    props.hugImageRight &&
    css`
      grid-column: 5 / span 8;
    `}
    ${(props) =>
    props.infoFour &&
    css`
      margin-top: 5rem;
      grid-column: span 3 !important;
    `}
  ${(props) =>
    props.listLeft &&
    css`
      grid-column: 4 / span 6 !important;
    `}
    ${(props) =>
    props.centerSmaller &&
    css`
      grid-column: 5 / span 4 !important;
    `}
    ${(props) =>
    props.imageFull &&
    css`
      grid-column: 1 / span 12 !important;
    `}

    ${(props) =>
    props.imageLarge &&
    css`
      grid-column: 2 / span 10 !important;
    `}
`;

// Project Information

export const ContentInfo = styled.div`
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

    ${(props) =>
    props.paddingTop &&
    css`
      padding-top: 10rem;
    `}

    ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: 10rem;
    `}
`;

export const Cover = styled.div`
  background-size: cover;
  background-position: center;

  ${(props) =>
    props.beacons &&
    css`
      background-image: url(${Beacons});
    `}
  ${(props) =>
    props.stocate &&
    css`
      background-image: url(${Stocate});
    `}
    ${(props) =>
    props.expedite &&
    css`
      background-image: url(${Expedite});
    `}
`;

export const Hero = styled.div`
  width: 100vw;
  height: 100vh;
  ${(props) => props.beacons && css``}
`;

export const Description = styled.div`
  font-size: 1.45rem;
  font-weight: 500;
  padding-bottom: 2rem;
  line-height: 140%;
  ${(props) =>
    props.title &&
    css`
      font-size: 2.182rem;
    `}
`;

export const Explanation = styled.div`
  font-size: 1.45rem;
  font-weight: 500;
  line-height: 140%;
`;

export const ProjectInfo = styled.div`
  line-height: 140%;
  margin-bottom: 0.5rem;
  font-weight: 500;
  // opacity: 0.75;
`;

export const ProjectInfoDetails = styled.div`
  line-height: 140%;
  font-weight: 500;
`;

// Project Content

export const Header = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.425rem;
  font-weight: 600;
  line-height: 122%;
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.lightLight};
    `}
`;

export const Text = styled.div`
  // color: ${(props) => props.theme.darkDark};
  line-height: 140%;
  ${(props) =>
    props.light &&
    css`
      color: ${(props) => props.theme.lightLight};
    `}
  ${(props) =>
    props.rule &&
    css`
      color: #898799;
      font-size: 0.9rem;
    `}
`;

export const Rule = styled.div`
  padding: 6rem 0rem;
`;

export const Span = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #898799;
  margin: 1rem;
  border-radius: 100rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Item = styled.li`
  line-height: 140%;
`;

// Expedite

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Block = styled.div`
  width: auto;
  aspect-ratio: 2 / 3;
  border-radius: 4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.One &&
    css`
      background-color: #f7f9fa;
      // border: 0.25px solid lightgray;
      box-sizing: border-box;
    `}

  ${(props) =>
    props.Two &&
    css`
      background-color: #c2c7ca;
    `}
    ${(props) =>
    props.Three &&
    css`
      background-color: #1a262c;
    `}
    ${(props) =>
    props.Four &&
    css`
      background-color: #cfff00;
      color: #1a262c;
    `}

    ${(props) =>
    props.Five &&
    css`
      color: white;
      background-color: #007fbf;
      grid-column: 1 / span 2;
      aspect-ratio: 4 / 3;
    `}
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: "Poppins", sans-serif;
`;

export const Case = styled.div`
  ${(props) =>
    props.One &&
    css`
      font-size: 30px;
      font-weight: 500;
    `}
  ${(props) =>
    props.Two &&
    css`
      font-size: 18px;
      font-weight: 500;
    `}
    ${(props) =>
    props.Three &&
    css`
      font-size: 13px;
      font-weight: 400;
    `}
    ${(props) =>
    props.Four &&
    css`
      font-size: 16px;
      font-weight: 400;
    `}
    ${(props) =>
    props.Five &&
    css`
      font-size: 16px;
      font-weight: 500;
    `}
    ${(props) =>
    props.Six &&
    css`
      font-size: 15px;
      font-weight: 700;
    `}
    ${(props) =>
    props.Seven &&
    css`
      font-size: 15px;
      font-weight: 600;
    `}

    ${(props) =>
    props.Eight &&
    css`
      font-size: 11px;
      font-weight: 600;
    `}

    ${(props) =>
    props.Nine &&
    css`
      font-size: 12px;
      font-weight: 600;
    `}
`;

export const Glyph = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 24vh;
  ${(props) =>
    props.smaller &&
    css`
      font-size: 2rem;
      font-family: ;
    `}
`;

export const Flex = styled.div``;
