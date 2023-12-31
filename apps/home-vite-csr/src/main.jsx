
import { createRoot } from "https://esm.sh/react-dom/client"
import App from "./App";
import './styles/global.css'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <main>
      <App />
    </main>
  </React.StrictMode>
);
