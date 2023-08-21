import { ProductList } from "./components";
import styles from "./App.module.css";
import { QueryClient, QueryClientProvider } from 'https://esm.sh/@tanstack/react-query'
const queryClient = new QueryClient()


const App = ({setCount}) => (
  <QueryClientProvider client={queryClient}>
  <section className={styles.appB}>
    <h3>Products</h3>
  </section>
  <ProductList setCount={setCount} />
  </QueryClientProvider>
);

export default App;
