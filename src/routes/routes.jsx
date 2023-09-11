import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Splash, Cadastro, RecoveryPass, Home } from '../containers'
import PrivateRoute from './privateRoutes'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defina o componente Login como rota raiz */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperarsenha" element={<RecoveryPass />} />
        <Route
          path={"/home"}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
