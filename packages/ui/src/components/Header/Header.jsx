import styles from "./Header.module.css";
import { format } from "https://esm.sh/date-fns";

const date = new Date();
const pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
const output = format(date, pattern, { timeZone: "Europe/Berlin" });

/**
 * Renders a counter component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {number} props.count - The count value.
 * @return {JSX.Element} The counter component.
 */

const Counter = ({ count }) => (
  <span className={styles.cart}>
    &#128722;
    <span className={styles.counter}>{count}</span>
  </span>
);

/**
 * Renders a header component with a title, children, count, and className.
 *
 * @param {string} title - The title of the header.
 * @param {ReactNode} children - The children elements of the header.
 * @param {number} count - The count value (default is 0).
 * @param {string} className - The additional className for the header.
 * @return {ReactElement} The header component.
 */
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
