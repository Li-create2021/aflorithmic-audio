import { Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Aflorithmic from "./components/pages/Aflorithmic";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Switch>
      <Route exact={true} path={"/"}>
        <About />
      </Route>
      <Route path={"/projects/aflorithmic"}>
        <Aflorithmic />
      </Route>
      {/* <Route path={"/projects/ierp.ai"}>
        <IERP />
      </Route> */}
      <Route path={"/contact"}>
        <Contact />
      </Route>
    </Switch>
  );
}

export default App;
