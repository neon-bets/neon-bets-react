import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";

import Lounge from "./components/Lounge/Lounge";

function App() {
  return (
    <div className="App">
      <Nav />
      <switch>
        <Route path="/lounge" component={Lounge} />
      </switch>
    </div>
  );
}

export default App;
