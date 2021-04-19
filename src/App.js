import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/PojectCard/ProjectCard";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Particles from "./Components/Particles/Particles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      <Particles />
    </>
  );
}

export default App;
