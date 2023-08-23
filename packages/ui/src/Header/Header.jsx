import styles from "./Header.module.css";
import { format } from "date-fns";

const date = new Date();
const pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
const output = format(date, pattern, { timeZone: "Europe/Berlin" });

const Counter = ({ count }) => (
  <span className={styles.cart}>
    &#128722;
    <span className={styles.counter}>{count}</span>
  </span>
);

export const Header = ({ title, children, count = 0, className }) => {
  return (
    <div className={`${styles.headerTab} ${className}`}>
      <h3>{title}</h3>
      {children}
      <p>{output}</p>
      <Counter count={count} />
    </div>
  );
};
