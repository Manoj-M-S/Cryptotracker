import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Recentlyadded from "./Components/recentlyadded";
import MostVisited from "./Components/mostvisited";
import Top10 from "./Components/top10";
import Topgainers from "./Components/topgainers";
import Toplosers from "./Components/toplosers";
import Toptrending from "./Components/trending";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recentlyadded" exact component={Recentlyadded} />
        <Route path="/mostvisited" exact component={MostVisited} />
        <Route path="/top10" exact component={Top10} />
        <Route path="/topgainers" exact component={Topgainers} />
        <Route path="/toplosers" exact component={Toplosers} />
        <Route path="/trending" exact component={Toptrending} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;