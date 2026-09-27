import "./Navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Ziad</h1>
            </div>

            <div className="navbar-links">
                <a href="#about">About</a>
                <a href="#about">Projects</a>
                <a href="#about">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;