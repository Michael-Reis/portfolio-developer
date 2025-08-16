import '../../styles/Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="tag">
                <div>Michael Reis</div>
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