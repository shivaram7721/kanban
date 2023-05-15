import "./App.css";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./component/dashboard/DashBoard";
import Description from "./component/description/Description";

function App() {
  return (
    <Routes>
      <Route path={"/dashboard"} element={<DashBoard />}></Route>
      <Route path={"/dashboard/:id"} element={<Description />}></Route>
    </Routes>
  );
}

export default App;
