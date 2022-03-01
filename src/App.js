import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import Header from "./components/Header";
import Home from "./pages/Homepage";
import CountryDetail from "./pages/CountryDetailPage";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="bg-bg_primary font-nunito">
      <Header />
      <div className="p-10">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/country/details/:code"
              exact
              component={CountryDetail}
            />
          </Switch>
        </Router>
        <div className="p-10">
          <footer>
            <Contact />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
