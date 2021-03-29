import React, { useState, useEffect } from "react";
import { MoveBlock, MoveBlockText, MoveHr } from "../styled/StyledComponents";

// mblock
export const MBlock = (props) => {
  const [blockMove, setBlockMove] = useState(false);
  const [visible, setVisible] = useState(false);
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
      if (isInViewport(document.getElementById(props.num))) {
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
  }, [props.flash, props.num]);
  const type = () => {
    if (props.type === "block")
      return (
        <MoveBlock
          dir={props.dir}
          stretch={props.stretch}
          move={blockMove}
          flash={props.flash}
          height={props.height}
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
