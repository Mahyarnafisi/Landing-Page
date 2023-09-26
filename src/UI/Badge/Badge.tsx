import Styles from "./Badge.module.css";
import { useState } from "react";

function Badge({ children }) {
  const [bgColor, setBgColor] = useState("");
  const colorList = ["#ffda79", "#c2f4fb", "#cbdbff"];

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className={Styles.badge}>
      {children}
    </div>
  );
}

export default Badge;
