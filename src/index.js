import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);     //use of undeclared variable: rootlement [E0057]

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);