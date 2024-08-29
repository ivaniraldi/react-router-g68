import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Landing from './views/Landing'
import NotFound from './views/NotFound'
import IniciarSesion from './views/IniciarSesion'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing></Landing>}/>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<IniciarSesion></IniciarSesion>} />
        <Route path='/404' element={<NotFound></NotFound>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </>
  )
}

export default App
