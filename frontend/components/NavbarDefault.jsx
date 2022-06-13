import styles from '../styles/Navbar.module.css'

const NavbarDefault = () => {
  return (
    <div className={styles.navbar}>
      <nav class="sticky-top">
            <div class="container-fluid nav-bar-content" id="nav-bar">
                <div class="navbar">
                    <a href="/" class="navbar-brand">
                        <img src="/images/system/SpectixenNetwork_logo_bez_pozadi_400x400.png" alt="" class="logo" />
                        <span class="navbar-text">STXN</span>
                    </a>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a href="/index.php" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="/creators.php" class="nav-link">Creators</a>
                        </li>
                        <button type="button" id="loginButton" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#loginModal">
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