
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Splash, Cadastro, RecoveryPass } from '../containers';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defina o componente Login como rota raiz */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperarsenha" element={<RecoveryPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
