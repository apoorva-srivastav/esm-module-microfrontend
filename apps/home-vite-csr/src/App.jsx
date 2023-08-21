import ProductPage from "https://product-csr.vercel.app/microApp.bundle.mjs";
import {Header} from 'https://ui-l.vercel.app/Header.mjs'
import {Footer} from 'https://ui-l.vercel.app/Footer.mjs'
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
