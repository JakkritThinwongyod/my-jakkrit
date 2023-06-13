import './App.css';
import Navbars from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NsCustomer from './components/nookShabu/NsCustomer';
import NsAdmin from './components/nookShabu/NsAdmin';
import NsKitcher from './components/nookShabu/NsKitchen';



function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbars/>}>
          <Route index element={<NsCustomer/>}/>
          <Route path='/nsKitchen' element={<NsKitcher/>}/>
          <Route path='/nsAdmin' element={<NsAdmin/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
