import Header from './layouts/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Produtos from './pages/Produtos/index';
import Usuarios from './pages/Usuarios';
import FormUsuarios from './pages/Usuarios/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/novo" element={<FormUsuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
