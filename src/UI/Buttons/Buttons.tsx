import Styles from "./Buttons.module.css";

function ButtonPrimary({ children }) {
  return <button className={Styles.buttonPrimary}>{children}</button>;
}

function ButtonSecondary({ children }) {
  return <button className={Styles.buttonSecondary}>{children}</button>;
}
export { ButtonPrimary, ButtonSecondary };
