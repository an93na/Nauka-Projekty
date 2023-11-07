import React, { useState } from "react";
import classes from "../style/HamburgerStyleCSSModule.module.css";
import Burger from "./hamb.png";

const lineItemStyle = { listStyle: "none" };

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleCloseClick = () => [setOpen(false)];
  return (
    <div className={classes.hamburger}>
      <div className={`container ${classes.hsrodek}`}>
        <h1 className={classes.naglowek}>Menu</h1>
      </div>
    </div>
  );
};
