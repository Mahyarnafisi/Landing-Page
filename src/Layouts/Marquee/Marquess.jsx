import MarqueeCard from "../../UI/MarqueeCard/MarqueeCard.jsx";
import Styles from "./Marquee.module.css";
import Marquee from "react-fast-marquee";
import MarqueeData from "../../data/MarqueeData.js";

function Marquess() {
  return (
    <div className={Styles.marquee}>
      <Marquee className={Styles.marqueeBar} pauseOnHover={true} autoFill={true} speed={40}>
        {MarqueeData.map((item, index) => {
          return <MarqueeCard name={item.name} job={item.job} key={index} id={item.id} tag={item.tag} image={item.image} />;
        })}
      </Marquee>
    </div>
  );
}

export default Marquess;
