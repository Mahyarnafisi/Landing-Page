import Styles from "./Badge.module.css";
import { useState } from "react";

function Badge({ children }) {
  const [bgColor, setBgColor] = useState("#ffda79");
  const colorList = ["#ffda79", "#c2f4fb", "#cbdbff"];

  setTimeout(() => {
    setBgColor(colorList[Math.floor(Math.random() * colorList.length)]);
  }, 5000);
  console.log(bgColor);

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className={Styles.badge}>
      {children}
    </div>
  );
}

export default Badge;
