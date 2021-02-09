import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import MoviePage from "./MoviePage";
import TvShowsPage from "./TvShowsPage";
import ItemPage from "./ItemPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-700 w-screen h-screen overflow-visible  ">
        <Switch>
          <Route path="/" exact />
          <Route path="/Movies" component={MoviePage} />
          <Route path="/Tv Shows" component={TvShowsPage} />
          <Route path="/Search" component={SearchPage} />
          <Route path="/Item/:id/:type" component={ItemPage} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
