import Styles from "./Badge.module.css";
import { useEffect, useState } from "react";
type BadgeProps = {
  children: React.ReactNode;
};
function Badge({ children }: BadgeProps) {
  const [bgColor, setBgColor] = useState("");
  const colorList = ["#ffda79", "#c2f4fb", "#cbdbff"];

  /*Function of Random Background Color for badge */
  useEffect(() => {
    const ColorSelection = setInterval(() => {
      setBgColor(colorList[Math.floor(Math.random() * 3)]);
    }, 6000);
    return () => {
      clearInterval(ColorSelection);
    };
  }, []);
  //

  return (
    <div style={{ backgroundColor: `${bgColor}` }} className={Styles.badge}>
      {children}
    </div>
  );
}

export default Badge;
