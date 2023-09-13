import Styles from "./HeroSection.module.css";
import Badge from "../UI/Badge/Badge";
import { ButtonPrimary, ButtonSecondary } from "../UI/Buttons/Buttons";

function HeroSection() {
  return (
    <div className={Styles.heroSection}>
      <div className="container">
        <div className={Styles.section}>
          <Badge>Over 3 million ready-to-work creatives in our community!</Badge>
          <h1 className={Styles.headingHome}>Hire the world’s top creative talent.</h1>
          <p className={Styles.subHeader}>Connect with a community of millions of top-rated designers & agencies around the world.</p>
          <ButtonPrimary>Start hiring today</ButtonPrimary>
          <ButtonSecondary>hello</ButtonSecondary>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
