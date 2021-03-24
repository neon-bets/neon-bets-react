import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Navbar/Nav";

import Lounge from "./components/Lounge/Lounge";
import BettingRoom from "./components/BettingRoom/BettingRoom";
import PinkRoom from "./components/PinkRoom/PinkRoom";
import Gallery from "./components/Gallery/Gallery";
import Swap from "./components/Swap/Swap";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/betting" />
        </Route>
        <Route path="/betting" component={BettingRoom} />
        <Route path="/pinks" component={PinkRoom} />
        <Route path="/lounge" component={Lounge} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/swap" component={Swap} />
        <Route path="/info" component={Info} />
      </Switch>
    </div>
  );
}

export default App;
