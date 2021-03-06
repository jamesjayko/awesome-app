import React from "react";
import Home from "./home";
import GetData from "./get_data";
import { Link, Route} from "react-router-dom";

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mickey-mouse">Get Data</Link>
      </li>
    </ul>
    <Route exact path="/" component={Home} />
    <Route path="/mickey-mouse" component={GetData} />
  </div>
);

export default App;
