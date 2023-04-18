import Navbar from "./Component/Navbar";
import './Component/Navbar.css';
import "./App.css";
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import Card from "./Component/Card/Card";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Card />
    </div>
  );
}


export default App;
