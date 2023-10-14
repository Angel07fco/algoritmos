import { Routes, Route } from 'react-router-dom';
import Cesar from '../pages/Cesar';
import Aes from '../pages/Aes';
import Poligono from '../pages/Poligono';
import Default from '../pages/Default';

function Rutas() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Cesar />} />
          <Route path='aes' element={<Aes />} />
          <Route path='poligono' element={<Poligono />} />
          <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default Rutas;
