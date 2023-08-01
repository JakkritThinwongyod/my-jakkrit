import "./App.css";
import Herder from "./header";
import Footer from "./footer";
import Content from "./content";

function App() {
  return (
    <div className="app">
      <Herder />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
