import React, { useState, useEffect, useRef } from "react";
import { MoveBlock, MoveBlockText, MoveHr } from "../styled/StyledComponents";

// mblock
export const MBlock = (props) => {
  const [blockMove, setBlockMove] = useState(false);
  const [visible, setVisible] = useState(false);
  const ID = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        );
      };
      if (isInViewport(ID.current)) {
        setBlockMove(true);
        if (!props.flash) {
          setInterval(() => {
            setVisible(true);
          }, 750);
        } else {
          setVisible(true);
        }
      }
    });
  }, [props.flash]);
  const type = () => {
    if (props.type === "block")
      return (
        <MoveBlock
          dir={props.dir}
          stretch={props.stretch}
          move={blockMove}
          flash={props.flash}
          height={props.height}
          ref={ID}
        >
          {content()}
        </MoveBlock>
      );
    else
      return (
        <MoveHr
          dir={props.dir}
          stretch={props.stretch}
          move={blockMove}
          flash={props.flash}
          width={props.width}
          ref={ID}
        ></MoveHr>
      );
  };
  const content = () => {
    return (
      <div>
        <MoveBlockText visible={visible}>{props.text}</MoveBlockText>
      </div>
    );
  };
  return type();
};
