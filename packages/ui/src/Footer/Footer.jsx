import styles from "./Footer.module.css";
export const Footer = ({className}) => {
  return (
    <div className={`${styles.footer} ${className}`}>
      <div>
        Copyright © 2022
        <p>
          Disclaimer: This is a sample disclaimer for footer.
        </p>
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
