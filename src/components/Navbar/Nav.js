import React from "react";
import classes from "./Nav.module.css";
import NavLinks from "./NavLinks/NavLinks";
import Logo from "../ui/Logo/Logo";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Nav;
