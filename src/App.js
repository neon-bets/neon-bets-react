import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Navbar/Nav";

import Lounge from "./components/Lounge/Lounge";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/betting" />
        </Route>
        <Route path="/lounge" component={Lounge} />
      </Switch>
    </div>
  );
}

export default App;
