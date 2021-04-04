import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Particles from "./Components/Particles/Particles";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Particles />
      </header>
    </div>
  );
}

export default App;
