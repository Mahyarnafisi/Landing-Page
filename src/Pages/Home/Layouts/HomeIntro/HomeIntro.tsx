import Styles from "./HomeIntro.module.css";
import { ButtonPrimary } from "../../../../UI/Buttons/Buttons";

function HomeIntro() {
  return (
    <section className={Styles.homeIntro}>
      <div className={Styles.heading}>
        <h1 className={Styles.heading__title}>When only the best talent will do...</h1>
      </div>
      <div className={Styles.main}>
        <h2 className={Styles.main__title}>Our Contents </h2>
        <p className={Styles.main__text}>From Ford to Airbnb to Capital One, see why over 60,000 leading brands and business builders use Dribbble to attract, engage, and hire their best design talent.</p>
        <ButtonPrimary>Get started</ButtonPrimary>
      </div>
    </section>
  );
}

export default HomeIntro;
