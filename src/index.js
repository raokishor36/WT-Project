import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Typography from "./styles/Typography";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById("root")
);
