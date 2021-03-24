import React from "react";
import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const on = {
    color: "red",
    fontFamily: "Neon",
  };

  return (
    <nav className={classes.NavLinks}>
      <NavLink to="/betting" className={classes.off} activeStyle={on}>
        Betting Room
      </NavLink>

      <NavLink to="pinks" activeStyle={on} className={classes.off}>
        NFT Pinks
      </NavLink>

      <NavLink to="lounge" activeStyle={on} className={classes.off}>
        Lounge
      </NavLink>

      <NavLink to="gallery" activeStyle={on} className={classes.off}>
        NFT Gallery
      </NavLink>

      <NavLink to="swap" activeStyle={on} className={classes.off}>
        Chip Swap
      </NavLink>

      <NavLink to="info" activeStyle={on} className={classes.off}>
        Info
      </NavLink>
    </nav>
  );
};

export default NavLinks;
