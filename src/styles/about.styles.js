import styled, { css } from "styled-components";
import Image1 from "../assets/aboutPage/flower.jpg";
import Image2 from "../assets/aboutPage/me-standing.jpg";
import Image3 from "../assets/aboutPage/me-spinning.jpg";
import Image4 from "../assets/aboutPage/orangeSky.jpg";
import Image5 from "../assets/aboutPage/leaf.jpg";
import Image6 from "../assets/aboutPage/redSky.jpg";

export const ContentInfo = styled.div`
  ${(props) =>
    props.about &&
    css`
      background-color: #f7f7fc;
      color: #6f58fc;
      padding: 0rem 0rem 10rem;
    `}
`;

export const Cover = styled.div`
  background-size: cover;
  background-position: center;

  ${(props) =>
    props.Image1 &&
    css`
      background-image: url(${Image2});
    `}
  ${(props) =>
    props.Image2 &&
    css`
      background-image: url(${Image1});
    `}
    ${(props) =>
    props.Image3 &&
    css`
      background-image: url(${Image3});
    `}
    ${(props) =>
    props.Image4 &&
    css`
      background-image: url(${Image4});
    `}
    ${(props) =>
    props.Image5 &&
    css`
      background-image: url(${Image5});
    `}
    ${(props) =>
    props.Image6 &&
    css`
      background-image: url(${Image6});
    `}
`;

export const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100vw;
  height: 80vh;
  gap: 6rem;
  padding: 6rem;
  box-sizing: border-box;
`;
