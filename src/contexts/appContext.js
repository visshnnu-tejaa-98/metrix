import { createContext, useState } from "react";

const AppContext = createContext({
  isSidebarOpen: null,
  toggleSidebar: () => {},
});

export const AppContextProvider = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    console.log("Triggered context fn");
    // console.log(isSidebarOpen);
    // isSideopen = isSidebarOpen;
    // isSideopen = !isSideopen;
    // setIsSidebarOpen(isSideopen);
    // return isSideopen;
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen: isSidebarOpen, toggleSidebar: toggleSidebar }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
