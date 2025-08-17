import ShinyText from '../TextAnimations/ShinyText/ShinyText';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="tag">
                <ShinyText text="Michael Reis" disabled={false} speed={5} className='custom-class' />
                <div className="navbar-links">
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}