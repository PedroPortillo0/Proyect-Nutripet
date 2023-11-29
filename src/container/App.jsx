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
        <Route path = '/' element = {<Landing/>}/>
        <Route path = '/login' element={<Login/>}/>     
        <Route path = '/register' element={<Register/>}/>     
        <Route path = '/recuperar' element={<RecoverPassword/>}/>     
        <Route path = '/graficas' element={<VistaGraficas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
