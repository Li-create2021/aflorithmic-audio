import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <Home />
      </Route>
      {/* <Route path="/MyProjects">
        <AudioApp />
      </Route> */}
    </Switch>
  );
}

export default App;
