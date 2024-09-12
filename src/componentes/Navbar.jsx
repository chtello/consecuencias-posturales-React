import './styles.css'
function Navbar() {

    return (
    <>
    <nav class="navbar bg-body-tertiary fixed-top" >
        <div class="container-fluid">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <img src="/Logo.png" className="ImgLogo" alt="Logo" />
            <span className="titulo fs-4"><h2>Cuerpo en Alerta</h2></span>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3"/>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/">Principal</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/juego">Juego</a>
                </li>
            </div>
          </div>
        </div>
      </nav>
    </>
    )
  }
  
  export default Navbar