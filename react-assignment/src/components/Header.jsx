
function Header(props) {
    return (
        <div>       
  <nav className="navbar navbar-expand-lg  sticky-top p-lg-3 p-sm-1 shadow ">
    <a
      href="index.html"
      className="navbar-brand d-flex align-items-center border-end px-3 px-lg-5"
    >
      <h2 className="m-0">
       {props.name}
      </h2>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="#" className="nav-item nav-link active">
          Home
        </a>
        <a href="#about" className="nav-item nav-link">
          About
        </a>
        <a href="#service" className="nav-item nav-link">
          Services
        </a>
        <a href="#client" className="nav-item nav-link">
          Client
        </a>
        
        <div className="nav-item dropdown me-3">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Pages
          </a>
          <div className="dropdown-menu bg-light m-0">
            <a href="#" className="dropdown-item">
              Features
            </a>
            <a href="#" className="dropdown-item">
              Appointment
            </a>
            <a href="#" className="dropdown-item">
              Our Team
            </a>
            <a href="#" className="dropdown-item">
              Testimonial
            </a>
            <a href="#" className="dropdown-item">
              404 Page
            </a>
          </div>
        </div>
        <button id="theme-toggle" className="btn btn-primary me-5">
          Sign Up
        </button>
      </div>
    </div>
  </nav>
  


        </div>
    )
}

export default Header

