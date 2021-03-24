import React from "react";
import classes from "./Logo.module.css";

import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={classes.logoContainer}>
      <h1 className={classes.logoOne}>NEON</h1>
      <div className={classes.betsContainer}>
        <h1 className={classes.logoTwo}>BETS</h1>
      </div>
    </div>
  );
};

export default Logo;
