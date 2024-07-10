import "./App.css";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";
import Jumbotron from "./components/Jumbotron.js";
import Footer from "./components/Footer.js";

function App() {
  return <>
   <Navbar/>
   <div className="container p-2 bg-light border d-grid gap-3">
   <Jumbotron/>
  <div className="row">
    <div className="col-3">
    <Card/>
    </div>
    <div className="col-3">
    <Card/>
    </div>
    <div className="col-3">
      <Card/>
    </div>
    <div className="col-3">
      <Card/>
    </div>
  </div>
</div>
<Footer/>
</>;
}

export default App;
