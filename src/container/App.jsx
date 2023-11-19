import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VistaGraficas from '../pages/Graficas';
import Login from '../pages/Login';
import Register from '../pages/Register';
import RecoverPassword from '../pages/RecoverPassword'
function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        {/* <Route path='/graf'element={<VistaGraficas/>}/> */}
        <Route path='/Register'element={<Register/>}/>     
        <Route path='/login'element={<Login/>}/>     
        <Route path='/graficas'element={<VistaGraficas/>}/>
        <Route path='/recuperar'element={<RecoverPassword/>}/>     


      </Routes>
    </BrowserRouter>
  )
}

export default App
