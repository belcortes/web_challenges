import React from "react";
import "./App.scss";

import Navigation from "./components/Navigation";
import Routes from "./routes";

const App = () => (
  <div className="App">
    <Navigation />
    <Routes />
  </div>
);

export default App;
