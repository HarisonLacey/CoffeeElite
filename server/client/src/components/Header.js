import React, { useState, useEffect, useRef } from "react";
import { HeaderContainer, ImageIcon } from "../styled/StyledComponents";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/close.png";
import { Menu } from "./Menu";

// header
export const Header = () => {
  const [HeaderState, setHeaderState] = useState(true);
  const [MenuShow, setMenuShow] = useState(false);
  const [IconShow, setIconShow] = useState(true);
  const iconRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 50) setHeaderState(false);
      else setHeaderState(true);
    });
    window.addEventListener("click", (e) => {
      let items = ["About", "Eat", "Reviews", "Contact"];
      if (items.includes(e.target.innerHTML)) {
        setMenuShow(false);
        setIconShow(false);
        setTimeout(() => {
          setIconShow(true);
          iconRef.current.src = MenuIcon;
        }, 300);
        document.getElementById(e.target.innerHTML).scrollIntoView();
      }
    });
  }, []);
  const icon = (e) => {
    if (MenuShow) {
      setMenuShow(false);
      setIconShow(false);
      setTimeout(() => {
        setIconShow(true);
        e.target.src = MenuIcon;
      }, 300);
    } else {
      setMenuShow(true);
      setIconShow(false);
      setTimeout(() => {
        setIconShow(true);
        e.target.src = CloseIcon;
      }, 300);
    }
  };
  return (
    <HeaderContainer HeaderSize={HeaderState}>
      <ImageIcon
        onClick={icon}
        icon={IconShow}
        alt="menu icon"
        src={MenuIcon}
        ref={iconRef}
      />
      <p HeaderSize={HeaderState}>CoffeeElite</p>
      <Menu show={MenuShow} top={HeaderState} />
    </HeaderContainer>
  );
};
