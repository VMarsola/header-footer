import { FC, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
const App: FC = () => {
  return (
    <Router>
      <AppRoutes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
