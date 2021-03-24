import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Navbar/Nav";

import Lounge from "./components/Lounge/Lounge";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/lounge" component={Lounge} />
        <Redirect from="/" to="/betting" />
      </Switch>
    </div>
  );
}

export default App;
