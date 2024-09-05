import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Landing from './views/Landing'
import NotFound from './views/NotFound'
import IniciarSesion from './views/IniciarSesion'
import UserProvider from './context/UserContext'

function App() {
  return (
    <>
    <UserProvider>
      <Routes>
        <Route path='/' element={<Landing></Landing>}/>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<IniciarSesion></IniciarSesion>} />
        <Route path='/404' element={<NotFound></NotFound>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </UserProvider>
    </>
  )
}

export default App
