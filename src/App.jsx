import "./App.css";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./component/dashboard/DashBoard";

function App() {
  return (
    <div>
    <Routes>
      <Route path={"/"} element={<DashBoard />}></Route>
    </Routes>
    </div>
  );
}

export default App;
