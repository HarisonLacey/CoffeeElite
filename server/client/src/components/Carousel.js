import React, { useState } from "react";
import {
  Image,
  NextArrow,
  BackArrow,
  Counter,
} from "../styled/StyledComponents";
import Next from "../assets/right-arrow.png";
import Back from "../assets/left-arrow.png";

// carousel
export const Carousel = () => {
  const [imageChange, setImageChange] = useState(true);
  const [images] = useState([
    "https://res.cloudinary.com/dyexps6g2/image/upload/v1609838910/4_vpqn2w.jpg",
    "https://res.cloudinary.com/dyexps6g2/image/upload/v1609838458/3_vampza.jpg",
    "https://res.cloudinary.com/dyexps6g2/image/upload/v1609838458/2_shvzwa.jpg",
    "https://res.cloudinary.com/dyexps6g2/image/upload/v1609838459/1_jgqomi.jpg",
    "https://res.cloudinary.com/dyexps6g2/image/upload/v1609838911/5_pgmjqb.jpg",
  ]);
  const [idChange, setIdChange] = useState(1);
  const slideShowForward = (e) => {
    let fId = e.target.parentNode.firstChild;
    let fSrc = e.target.parentNode.firstChild;
    setImageChange(false);
    setTimeout(() => {
      if (parseInt(fId.id) === images.length - 1) {
        fSrc.src = images[0];
        fId.id = 0;
        setIdChange(parseInt(fId.id) + 1);
      } else {
        fSrc.src = images[parseInt(fId.id) + 1];
        fId.id = parseInt(fId.id) + 1;
        setIdChange(parseInt(fId.id) + 1);
      }
    }, 200);
    setTimeout(() => {
      setImageChange(true);
    }, 300);
  };
  const slideShowBackward = (e) => {
    let bId = e.target.parentNode.firstChild;
    let bSrc = e.target.parentNode.firstChild;
    setImageChange(false);
    setTimeout(() => {
      if (parseInt(bId.id) === 0) {
        bSrc.src = images[images.length - 1];
        bId.id = images.length - 1;
        setIdChange(parseInt(bId.id) + 1);
      } else {
        bSrc.src = images[parseInt(bId.id) - 1];
        bId.id = parseInt(bId.id) - 1;
        setIdChange(parseInt(bId.id) + 1);
      }
    }, 200);
    setTimeout(() => {
      setImageChange(true);
    }, 300);
  };
  return (
    <div>
      <Image id={0} change={imageChange} src={images[0]} alt="slide" />
      <NextArrow onClick={slideShowForward} src={Next} alt="next arrow" />
      <BackArrow onClick={slideShowBackward} src={Back} alt="back arrow" />
      <Counter>{idChange}</Counter>
    </div>
  );
};
