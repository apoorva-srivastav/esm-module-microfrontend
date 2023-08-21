import styles from './Header.module.css'
import { format } from 'https://esm.sh/date-fns'

const date = new Date()
const pattern = 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)'
const output = format(date, pattern, { timeZone: 'Europe/Berlin' })

const Counter = ({count}) => (<span>
  &#128722;
  {count}
</span>)

export const Header = ({ title, children, count = 0 , className}) => {
  return (<div className={`${styles.headerTab} ${className}`}><h1>{title}</h1>
  {children}
  <p>{output}</p>
  <Counter count={count}/>
  </div>);
};
