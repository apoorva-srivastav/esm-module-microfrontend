import styles from "./Footer.module.css";

/**
 * Renders the footer component.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.className - The class name to be added to the footer div.
 * @return {JSX.Element} The rendered footer component.
 */
export const Footer = ({className}) => {
  return (
    <div className={`${styles.footer} ${className}`}>
      <div>
        Copyright © 2022
        <div>
          Disclaimer: This is a sample disclaimer for footer.
        </div>
      </div>
      <div className={styles.footerList}>
      <ul className={styles.footerListItem}>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <ul className={styles.footerListItem}>
        <li>Follow Us</li>
        <li>More Info</li>
      </ul>
      </div>
    </div>
  );
};
