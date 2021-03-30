import React from "react";
import classes from "./ColorChooser.module.css";

// Props:
// props.choices - an array of color codes
// props.chooseColor - a callback function to set the current color
// props.currentColor - The currently selected color

const ColorChooser = (props) => {
  return (
    <div className={classes.ColorChooser}>
      Nametag Color:
      {props.choices.map((color, i) => {
        return (
          <div
            style={{ backgroundColor: color }}
            className={
              props.currentColor === props.choices[i]
                ? classes.chosen
                : classes.choice
            }
            onClick={() => props.chooseColor(props.choices[i])}
            key={color + i}
          ></div>
        );
      })}
    </div>
  );
};

export default ColorChooser;
