
import ShinyText from '../TextAnimations/ShinyText/ShinyText';
import './Navbar.css';
import { handleScroll } from '../../lib/utils';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="tag">
                <ShinyText text="Michael Reis" disabled={false} speed={5} />
                <div className="navbar-links">
                    <ul>
                        <li>
                            <a href="#inicio" onClick={e => handleScroll(e, 'inicio')}>Inicio</a>
                        </li>
                        <li>
                            <a href="#contato" onClick={e => handleScroll(e, 'contato')}>Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}