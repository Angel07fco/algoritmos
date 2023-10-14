import { Outlet, useNavigate } from 'react-router-dom';
import './styles/Menu.css';

const Menu = () => {

    const navigate = useNavigate();

    const goToCesar = () => {
        navigate('/');
    };

    const goToAes = () => {
        navigate('/aes');
    };

    const goToPoligono = () => {
        navigate('/poligono');
    };

    return(
    <div className="contenedor">
        <nav className="menu">
          <ul>
            <li onClick={goToCesar}>
                <a className="links">Cifrado Cesar</a>
            </li>
            <li onClick={goToAes}>
                <a className="links">Cifrado Aes</a>
            </li>
            <li onClick={goToPoligono}>
                <a className="links">Cifrado de Poligono</a>
            </li>
          </ul>
        </nav>
        <Outlet />
    </div>);
}

export default Menu