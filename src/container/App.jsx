import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VistaGraficas from '../pages/Graficas';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword'
import Landing from '../pages/Landing';
function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        {/* <Route path='/graf'element={<VistaGraficas/>}/> */}
        <Route path='/Register'element={<Register/>}/>     
        <Route path='/login'element={<Login/>}/>     
        <Route path='/graficas'element={<VistaGraficas/>}/>
        <Route path='/recuperar'element={<RecoverPassword/>}/>     
        <Route path = "/landing" element = {<Landing/>}/>


      </Routes>
    </BrowserRouter>
  )
}

export default App
