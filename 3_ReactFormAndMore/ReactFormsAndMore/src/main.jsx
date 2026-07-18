import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// 2
// import { Provider } from "react-redux";
// import { store } from "./Componants/2_Redux/Store.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 2 */}
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </StrictMode>,
);
