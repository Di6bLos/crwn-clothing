import { Fragment } from "react";
// Outlet is like a window where different "route" components are rendered
import { Outlet } from "react-router-dom";
import "./style.scss";
import NavBar from "./components/NavBar";

// App.js serves as the main component that react interacts with

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default App;
