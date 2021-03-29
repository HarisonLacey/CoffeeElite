import styled, { createGlobalStyle } from "styled-components";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { sizes } from "./Sizes";

// styled components

// global styling
export const GlobalStyle = createGlobalStyle`
body {
  overflow-x: hidden;
}
`;

// parallax
export const Parallax = styled.div.attrs((props) => ({
  height: props.height || "700px",
}))`
  background-image: url(${(props) => props.url});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${(props) => props.height};
`;

// landing container
export const LandingContainer = styled(Container)`
  padding: 0;
  width: 100%;
  overflow: hidden;
`;

// header styling
export const HeaderContainer = styled.div`
  height: ${(props) => (props.HeaderSize ? "90px" : "60px")};
  position: fixed;
  width: 100%;
  top: 0;
  transition: 1s;
  background-color: ${(props) =>
    props.HeaderSize ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.4)"};
  z-index: 2;
  p {
    font-family: "Lobster", cursive;
    color: whitesmoke;
    font-size: ${(props) => (props.HeaderSize ? "2em" : "1.5em")};
    position: absolute;
    right: 3%;
    top: 0;
    margin: 0;
    transition: 0.5s;
  }
`;

// col block
export const ColBlock = styled(Col)`
  position: absolute;
  top: ${(props) => props.top};
  height: 300px;
  padding: 0;
`;

// mblock
export const MoveBlock = styled.div.attrs((props) => ({
  height: props.height || "300px",
}))`
  position: absolute;
  top: 0;
  text-align: center;
  transition: 1s;
  height: ${(props) => props.height};
  padding: 2%;
  background-color: ${(props) =>
    !props.move ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0.4)"};
  width: ${(props) => {
    if (props.stretch) return "100%";
    else return "50%";
  }};
  left: ${(props) => {
    if (!props.flash) {
      switch (props.stretch) {
        case false:
          switch (props.dir) {
            case "right":
              if (!props.move) return "3%";
              else return "47%";
            case "left":
              if (!props.move) return "47%";
              else return "3%";
            default:
              return null;
          }
        case true:
          switch (props.dir) {
            case "left":
              if (!props.move) return "100%";
              else return "0";
            default:
              return null;
          }
        default:
          return null;
      }
    }
  }};
  right: ${(props) => {
    if (!props.flash) {
      switch (props.stretch) {
        case true:
          switch (props.dir) {
            case "right":
              if (!props.move) return "100%";
              else return "0";
            default:
              return null;
          }
        default:
          return null;
      }
    }
  }};
`;

// move block text
export const MoveBlockText = styled.h2`
  opacity: ${(props) => {
    switch (props.flash === true) {
      case false:
        if (!props.visible) return "0";
        else return "100%";
      case true:
        return "100%";
      default:
        return null;
    }
  }};
  color: wheat;
  font-family: "Lobster", cursive;
  transition: 1.5s;
  font-weight: bold;
  font-size: 3em;
`;

// mhr
export const MoveHr = styled.hr`
  position: absolute;
  transition: 1s;
  border-top: solid ${(props) => props.width} wheat;
  top: 0;
  opacity: ${(props) => (!props.move ? "0" : "50%")};
  width: ${(props) => {
    if (props.stretch) return "100%";
    else return "50%";
  }};
  left: ${(props) => {
    if (!props.flash) {
      switch (props.stretch) {
        case false:
          switch (props.dir) {
            case "right":
              if (!props.move) return "3%";
              else return "47%";
            case "left":
              if (!props.move) return "47%";
              else return "3%";
            default:
              return null;
          }
        case true:
          switch (props.dir) {
            case "left":
              if (!props.move) return "100%";
              else return "0";
            default:
              return null;
          }
        default:
          return null;
      }
    }
  }};
  right: ${(props) => {
    if (!props.flash) {
      switch (props.stretch) {
        case true:
          switch (props.dir) {
            case "right":
              if (!props.move) return "100%";
              else return "0";
            default:
              return null;
          }
        default:
          return null;
      }
    }
  }};
`;

// image styling
export const Image = styled.img`
  transition: 0.3s;
  width: 100%;
  opacity: ${(props) => (props.change ? "100%" : "5%")};
`;

// text block
export const TextBlock = styled(Col)`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.5em;
  line-height: 50px;
  padding: 1em;
  background-color: rgb(0, 0, 0, 0.9);
  color: wheat;
  font-family: "Lobster", cursive;
  @media only screen and (max-width: ${sizes.lg}px) {
    height: 300px;
  } ;
`;

// footer
export const Footer = styled(TextBlock)`
  display: block;
  height: 300px;
  @media only screen and (max-width: ${sizes.md}px) {
    height: 400px;
  }
  padding-top: 20px;
  line-height: 80px;
`;

// image icon
export const ImageIcon = styled.img.attrs((props) => ({
  transition: props.transition || "0.5s",
}))`
  z-index: 1;
  margin: 11px 0 0 1%;
  opacity: ${(props) => (props.icon ? "100%" : "0")};
  transition: ${(props) => props.transition};
  :hover {
    cursor: pointer;
  }
`;

// menu container
export const MenuContainer = styled.div`
  width: ${(props) => {
    if (props.dir === "right") {
      if (props.show) return "100%";
      else return "0";
    } else {
      return "100%";
    }
  }};
  @media only screen and (min-width: ${sizes.lg}px) {
    width: ${(props) => {
      if (props.dir === "right") {
        if (props.show) return "50%";
        else return "0";
      } else {
        return "50%";
      }
    }};
  }
  height ${(props) => {
    if (props.dir === "right") {
      return "1000px";
    } else {
      if (props.show) return "1000px";
      else return "0";
    }
  }};
  visibility: ${(props) => (props.show ? "inline-block" : "hidden")};
  background-color: ${(props) =>
    props.show ? "rgb(128, 128, 128, 0.8)" : "rgb(128, 128, 128, 0)"};
  margin-top: ${(props) => (props.top ? "47px" : "17px")};
  transition: 1s;
  padding-top: 1%;
  padding-right: 2%;
  hr {
    border-top: solid 5px wheat;
    width: 0;
  }
  `;

// menu list
export const MenuUl = styled.ul`
  list-style-type: none;
  padding-left: 2%;
  font-family: "Lobster", cursive;
  font-size: 2em;
  opacity: ${(props) => (props.show ? "100%" : "0")};
  transition: 1s;
  li:hover {
    cursor: pointer;
  }
`;

// newsletter subscription
export const Newsletter = styled.form`
  position: fixed;
  z-index: 1;
  border: solid 3px black;
  bottom: 5%;
  left: 5%;
  visibility: ${(props) => (!props.close ? "inline-block" : "hidden")};
  width: 90%;
  background-color: wheat;
  padding: 1%;
  opacity: 90%;
  button,
  input {
    display: block;
    margin: 1% auto;
    width: 50%;
  }
  button {
    background-color: #cdac81;
    border: none;
    padding: 2%;
    font-family: "Lobster", cursive;
    color: whitesmoke;
    font-size: 1.5em;
  }
  input {
    height: 35px;
  }
  button:hover {
    background-color: #c87941;
    color: wheat;
  }
  @media only screen and (min-width: ${sizes.lg}px) {
    width: 50%;
    left: 45%;
  }
`;

// newsletter subscription response
export const Response = styled.p`
  text-align: center;
  height: 40px;
  font-size: 2em;
  font-family: "Lobster", cursive;
  color: ${(props) => {
    switch (props.color) {
      case "One sec...":
        return "black";
      case "Subscribed!":
        return "#61b15a";
      case "Something went wrong :(":
        return "red";
      default:
        return null;
    }
  }};
`;

// carousel next arrow
export const NextArrow = styled.img`
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 1;
  transition: 0.5s;
  :hover {
    opacity: 60%;
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

// carousel back arrow
export const BackArrow = styled.img`
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 1;
  transition: 0.5s;
  :hover {
    opacity: 60%;
    cursor: pointer;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

// carousel counter
export const Counter = styled.p`
  position: absolute;
  bottom: 5px;
  left: 50%;
  color: wheat;
  font-family: "Lobster", cursive;
`;
