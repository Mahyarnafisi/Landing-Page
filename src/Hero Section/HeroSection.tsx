import Styles from "./HeroSection.module.css";
import Badge from "../UI/Badge/Badge";
import { ButtonPrimary } from "../UI/Buttons/Buttons";
import { useEffect, useState } from "react";

function HeroSection() {
  const titleWord = ["Top", "Best", "Awesome"];
  const [titleWordChange, setTitleWordChange] = useState("");
  useEffect(() => {
    const wordChanger = setInterval(() => {
      setTitleWordChange(titleWord[Math.floor(Math.random() * 3)]);
    }, 10000);

    return () => {
      clearInterval(wordChanger);
    };
  });

  return (
    <div className={Styles.heroSection}>
      <div className="container">
        <div className={Styles.section}>
          <Badge>Over 3 million ready-to-work creatives in our community!</Badge>
          <h1 className={Styles.headingHome}>
            Work with world’s <span>{titleWordChange}</span> creative talent.
          </h1>
          <p className={Styles.subHeader}>Connect with a community of millions of top-rated designers & agencies around the world.</p>
          <ButtonPrimary>Start hiring today</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
