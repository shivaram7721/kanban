import "./App.css";
import { Routes, Route } from "react-router-dom";

import DashBoard from "./component/dashboard/DashBoard";
import Description from "./component/description/Description";

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
