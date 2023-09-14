import Styles from "./Marquee.module.css";
import Marquee from "react-fast-marquee";

function Marquess() {
  return (
    <div className={Styles.marquee}>
      <Marquee className={Styles.marqueeBar} pauseOnHover={true} autoFill={true} speed={30}>
        <h1>marquee</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
        <h1>hello there</h1>
      </Marquee>
    </div>
  );
}

export default Marquess;
