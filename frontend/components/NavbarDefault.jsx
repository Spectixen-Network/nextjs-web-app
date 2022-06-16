import styles from '../styles/Navbar.module.css'

const NavbarDefault = () => {
  return (
    <div className={styles.navbar}>
      <nav className="sticky-top">
            <div className="container-fluid nav-bar-content" id="nav-bar">
                <div className="navbar">
                    <a href="/" className="navbar-brand">
                        <img src="./images/system/background.png" alt="" class="logo" />
                        <span className="navbar-text">STXN</span>
                    </a>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a href="/index.php" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/creators.php" className="nav-link">Creators</a>
                        </li>
                        <button type="button" id="loginButton" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#loginModal">
                            Log In
                        </button>
                    </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default NavbarDefault