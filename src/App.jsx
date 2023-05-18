import { Routes, Route } from "react-router-dom";
import DashBoard from "./component/dashboard/DashBoard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<DashBoard />}></Route>
    </Routes>
  );
}

export default App;
