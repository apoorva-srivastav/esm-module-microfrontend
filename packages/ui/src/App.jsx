import { Footer, Header } from "./components";
import styles from "./App.module.css";
import {Button} from "./components";

const App = () => (
  <>
  <section className={styles.appB}>
    <h1>Library</h1>
  </section>
  <div className={styles.appComponent}>
    Button
  <Button text='Sample button'/>
  <Button>Another Sample button</Button>
  </div>
  <div className={styles.appComponent}>
    Header
  <Header title='Sample header'/>
  </div>
  <div className={styles.appComponent}>
    Footer
  <Footer/>
  </div>
  </>
);

export default App;
