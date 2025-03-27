import * as React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20, // 10px pastga tushganda trigger ishlaydi
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "rgba(0,0,0,0.6)" : "transparent", // 🔥 Foni shaffof yoki qora
      transition: "background-color 0.3s ease-in-out",
      boxShadow: trigger ? "0px 4px 6px rgba(0,0,0,0.1)" : "none", // 🔹 So'ya qo'shish
    },
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
