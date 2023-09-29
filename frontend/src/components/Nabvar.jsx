import React from 'react';
import logo from '../images/mylogo.png';

const Nabvar = () => {
  return (
    <>
      <div className='container-fluid bottom-border' style={{ background: '#024859' }}></div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="" />
          </div>
          <div className="col-md-4 my-3">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-4 my-3">
            {/* <a href='' className='btn btn-outline-success' type='submit'/>
            <i className="fa-solid fa-user-plus"></i>  Login */}
            <button className="btn btn-outline-success" type="submit">
            <i className="fa-solid fa-user-plus"></i>  Login
            </button>
            <button className="btn btn-outline-success mx-2" type="submit">
            <i className="fa-solid fa-right-to-bracket"></i> Register
            </button>

          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light blueclass">
        <div className="container-fluid pl-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* <a className="navbar-brand text-white" href="#">
              Hidden brand
            </a> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa-solid fa-house-chimney mx-1"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa-solid fa-book mx-1"></i> Recent Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa-solid fa-book-open mx-1"></i> Latest Books
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  <i className="fa-solid fa-book-open mx-1"></i> Popular Books
                </a>
              </li>




            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Nabvar
