import { Switch, Route } from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
// import { LayoutContext } from "antd/lib/layout/layout";
import LayoutTemplate from "./components/templates/layout/LayoutTemplate";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <About LayoutTemplate={LayoutTemplate} />
      </Route>
      {/* <Route path="/MyProjects">
        <AudioApp />
      </Route> */}
    </Switch>
  );
}

export default App;
