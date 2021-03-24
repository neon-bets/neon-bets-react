import React from "react";
import classes from "./Logo.module.css";

import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="betting" style={{ textDecoration: "none" }}>
      <div className={classes.logoContainer}>
        <h1 className={classes.logoOne}>NEON</h1>
        <div className={classes.betsContainer}>
          <h1 className={classes.logoTwo}>BETS</h1>
        </div>
      </div>
    </NavLink>
  );
};

export default Logo;
