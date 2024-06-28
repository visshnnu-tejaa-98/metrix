import { Outlet } from "react-router-dom";
import "./App.css";
import Breadgrums from "./components/Breadgrums";
// import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
}

export default App;
