import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import AppContextProvider from "../src/contexts/appContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Sidebar>
          <Outlet />
        </Sidebar>
      </AppContextProvider>
    </div>
  );
}

export default App;
