import { ProductList } from "./components";
import { QueryClient, QueryClientProvider } from 'https://esm.sh/@tanstack/react-query'
const queryClient = new QueryClient()


const App = ({setCount}) => (
  <QueryClientProvider client={queryClient}>
  <ProductList setCount={setCount} />
  </QueryClientProvider>
);

export default App;
