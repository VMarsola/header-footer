import { Routes, Route } from "react-router-dom";

import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={<PageLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
