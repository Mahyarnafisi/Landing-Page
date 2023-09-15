import Styles from "./Badge.module.css";
import { useState, useCallback } from "react";

function Badge({ children }) {
  const [bgColor, setBgColor] = useState("");
  const colorList = ["#ffda79", "#c2f4fb", "#cbdbff"];

  const colorChanger = useCallback(() => {
    const colorSet = Math.floor(Math.random() * 3);
    setBgColor(colorList[colorSet]);
  }, [bgColor]);

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className={Styles.badge}>
      {children}
    </div>
  );
}

export default Badge;
