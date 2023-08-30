import ProductPage from "https://product-csr.vercel.app/microApp@1.0.0.mjs";
// for npm run dev ; as vite gives error for import maps in dev mode
import {Header} from 'https://ui-l.vercel.app/Header@1.0.0.mjs'
import {Footer} from 'https://ui-l.vercel.app/Footer@1.0.0.mjs'

// for production
//import {Header} from 'header'
//import {Footer} from 'footer'
import styles from "./App.module.css";
import { useState } from "https://esm.sh/react@18.2.0";

const App = () => {
  const [count, setCount] = useState(0)
  return(
  <>
  <Header className={styles.header} title='Home Page' count={count}/>
  <div className={styles.mainContent}>
  <ProductPage setCount={setCount}/>
  </div>
  <Footer />
  </>
)};

export default App;
