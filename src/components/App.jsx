import React from "react";
import Main from "./test/Main";
import Sub from "./test/Sub";
import Write from "./test/Write";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/sub" exact component={Sub}></Route>
        <Route path="/write" exact component={Write}></Route>
      </Switch>
    </Router>
  );
}
export default App;
