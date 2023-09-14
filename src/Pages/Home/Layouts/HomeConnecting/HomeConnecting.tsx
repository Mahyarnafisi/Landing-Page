import Badge from "../../../../UI/Badge/Badge";
import Styles from "./HomeConnecting.module.css";

function HomeConnecting() {
  return (
    <div className={Styles.Connecting}>
      <Badge>Trusted by top brands & businesses</Badge>
      <h1 className={Styles.connecting__title}>Connecting brands and business builders with the world’s top designers</h1>
      <p className={Styles.connecting__text}>The world’s leading brands use Landing to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.</p>
    </div>
  );
}

export default HomeConnecting;
