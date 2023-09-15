import Styles from "./MarqueeCard.module.css";

function MarqueeCard({ name, job, tag, image }) {
  return (
    <div className={Styles.marqueeCard} style={{ backgroundImage: `url(${image})` }}>
      <div className={Styles.card__header}>
        <h2>{name}</h2>
        <h3>{job}</h3>
      </div>
      <div className={Styles.card__body}></div>
      <div className={Styles.card__footer}>
        {tag.map((item, index) => {
          return (
            <p key={index} className={Styles.footer__tag}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default MarqueeCard;
