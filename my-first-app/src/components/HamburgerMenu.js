import React, { useState } from "react";
import classes from "../style/HamburgerStyleCSSModule.module.css";
import Burger from "./hamb.png";

const lineItemStyle = { listStyle: "none" };

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <button>
      <span className={classes.hamburger__box}>
        <span className={classes.hamburger__inner}></span>
      </span>
    </button>
  );
};
