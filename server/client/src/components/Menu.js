import React, { useEffect } from "react";
import { MenuContainer, MenuUl } from "../styled/StyledComponents";

// Menu
export const Menu = (props) => {
  useEffect(() => {
    window.addEventListener("mouseover", (e) => {
      if (e.target.className === "list-item") {
        let count = 10;
        setInterval(() => {
          if (count <= 100) {
            e.target.nextSibling.style.width = `${count}%`;
            count += 10;
          }
        }, 30);
      }
    });
    window.addEventListener("mouseover", (e) => {
      if (e.target.className !== "list-item") {
        let items = document.getElementsByClassName("list-item");
        for (let el of items) {
          el.nextSibling.style.width = "0";
        }
      }
    });
  }, []);

  function menuItems() {
    let items = ["About", "Eat", "Reviews", "Contact"];
    return items.map((e) => (
      <div>
        <li className="list-item">{e}</li>
        <hr />
      </div>
    ));
  }
  return (
    <MenuContainer show={props.show} top={props.top} dir="right">
      <MenuUl show={props.show}>{menuItems()}</MenuUl>
    </MenuContainer>
  );
};
