import React, { useState } from "react";
import classes from "../style/HamburgerStyleCSSModule.module.css";
import Burger from "./hamb.png";
import { Link } from "react-router-dom";

const lineItemStyle = { listStyle: "none" };

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleCloseClick = () => [setOpen(false)];
  return (
    <div className={classes.hamburger}>
      <div className={`container ${classes.hsrodek}`}>
        <h1 className={classes.naglowek}>Pierwsza apka</h1>
        <button
          className={classes.btn}
          style={{ margin: 0 }}
          onClick={() => setOpen(true)}
        >
          <img width={35} src={Burger} alt="hamburger" />
        </button>
      </div>
      <dialog open={open} onClick={handleCloseClick}>
        <button className={`${classes.btn} ${classes.btnmore}`}>&times</button>
        <article onClick={(e) => e.stopPropagation()}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
            }}
          >
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/">
                Home
              </Link>
              <Link onClick={handleCloseClick} to="/second-page">
                SecondPage
              </Link>
            </li>
          </ul>
        </article>
      </dialog>
    </div>
  );
};
