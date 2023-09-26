import Styles from "./Buttons.module.css";

type ButtonProps = {
  children: React.ReactNode;
};

function ButtonPrimary({ children }: ButtonProps) {
  return <button className={Styles.buttonPrimary}>{children}</button>;
}

function ButtonSecondary({ children }: ButtonProps) {
  return <button className={Styles.buttonSecondary}>{children}</button>;
}
export { ButtonPrimary, ButtonSecondary };
