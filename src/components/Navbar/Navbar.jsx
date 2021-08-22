import "./navbar.css";

function Navbar(){
    return (
        <>
            <label for="navbar-toggle-i" id="navbar-toggle-l">X</label>
            <input type="checkbox" id="navbar-toggle-i"/>
            <nav>
                <ul id="navbar-list">
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">Contact</a></li>
                    <li><a href="/#">Mode</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
