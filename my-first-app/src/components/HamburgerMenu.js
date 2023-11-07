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
        <h1 className={classes.naglowek}>Pierwsza apka</h1>
      <button className={classes.btn} style={{margin:0}} onClick={()=>setOpen(true)}>
        <img width={35} src={Burger} alt="hamburger" />
      </button>
      </div>
      <dialog open={open} onClick={handleCloseClick}>
<button className={`${classes.btn} ${classes.btnmore}`}>&times</button>
      </dialog>
    </div>
  );
};
