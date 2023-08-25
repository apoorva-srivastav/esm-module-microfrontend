import styles from './Card.module.css'

/**
 * Renders a card component.
 *
 * @param {Object} props - The properties of the component.
 * @param {ReactNode} props.children - The children of the card component.
 * @param {string} props.className - The class name of the card component.
 * @return {ReactNode} The rendered card component.
 */
export const Card = ({children, className}) => {
    return (
        <div className={`${styles.card} ${className}`}>{children}
        </div>
    );
}