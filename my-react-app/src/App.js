import './App.css';
import Navbars from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Contact from './components/contact';
import Footer from './components/footer';
import Shoping from './components/shop';
import About from './components/about';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbars/>}>
          <Route index element={<Home/>}/>
          <Route path='/shop' element={<Shoping/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
