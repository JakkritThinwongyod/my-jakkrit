import './App.css';
import Navbars from './Projects/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NsCustomer from './Projects/nookShabu/NsCustomer';
import NsAdmin from './Projects/nookShabu/NsAdmin';
import NsKitcher from './Projects/nookShabu/NsKitchen';



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
