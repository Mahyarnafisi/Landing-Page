import Styles from "./MarqueeHeader.module.css";
import Marquee from "react-fast-marquee";
import { marqueeData } from "../../../../data/marqueeData";
import MarqueeCard from "../../../../UI/MarqueeCard/MarqueeCard";

function MarqueeHeader() {
  return (
    <Marquee className={Styles.marqueeHeader} speed={50} pauseOnHover={true} gradient={true}>
      {marqueeData.map((item, index) => {
        return <MarqueeCard key={index} name={item.name} job={item.job as string} tag={item.tag} image={item.image} />;
      })}
    </Marquee>
  );
}

export default MarqueeHeader;
