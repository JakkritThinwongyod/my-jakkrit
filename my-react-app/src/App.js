import './App.css';
import Navbars from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Experience from './components/experience';
import Education from './components/education';
import Skill from './components/skill';
import Contact from './components/contact';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbars/>}>
          <Route index element={<Home/>}/>
          <Route path='experience' element={<Experience/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='skill' element={<Skill/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
