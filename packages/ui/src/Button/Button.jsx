import React from 'react'
import styles from './Button.module.css'
/**
 * Renders a basic button component.
 *
 * @param {object} props - The props object containing the following properties:
 *   @param {string} Text: The text to display on the button.
 *   @param {function} onClick: The callback function to be called when the button is clicked. Defaults to an empty function.
 */ 
export const Button = ({text, onClick , disable = false, children, ...props}) => {
  return (
      <button className={styles.button} onClick={() => onClick()} disable={disable} {...props}>{text || children}</button>
  );
}

