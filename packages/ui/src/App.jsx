import { Card, Footer, Header } from "./components";
import styles from "./App.module.css";
import { Button } from "./components";

const App = () => (
  <>
    <section>
      <h1>Library</h1>
    </section>
    <div className={styles.appComponent}>
      Button
      <div>
        <Button text="Sample button" />
        <Button type="secondary">Another Sample button</Button>
      </div>
    </div>
    <div className={styles.appComponent}>
      Card
      <div>
        <Card>
          {" "}
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, cum iure. Eos quaerat mollitia harum
            suscipit veniam veritatis fugit illo, commodi rem laboriosam officia delectus soluta magni sit porro alias.
          </div>
          <div>
            <Button text="Sample button" />
            <Button type="secondary">Another Sample button</Button>
          </div>
        </Card>
      </div>
    </div>
    <div className={styles.appComponent}>
      Header
      <div>
        <Header title="Sample header" />
      </div>
    </div>
    <div className={styles.appComponent}>
      Footer
      <div>
        <Footer />
      </div>
    </div>
  </>
);

export default App;
