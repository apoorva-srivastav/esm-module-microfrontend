import {ProductList} from "./components/ProductList";
import {Header, Footer} from 'ui'
import styles from "./App.module.css";
import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0)
  return(
  <>
  <Header className={styles.header} title='Home Page' count={count}/>
  <div className={styles.mainContent}>
  <ProductList setCount={setCount}/>
  </div>
  <Footer />
  </>
)};

export default App;
