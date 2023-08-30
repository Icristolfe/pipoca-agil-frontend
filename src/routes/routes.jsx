
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Splash, Cadastro } from '../containers';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defina o componente Login como rota raiz */}
        <Route path="/" element={<Login />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
