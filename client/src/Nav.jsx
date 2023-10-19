import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Nav.css";
import NavJS from "./Nav.js";
export default function Nav() {
  return (
    <>
      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <a href="#!" className="ms-md-2">
                  <img
                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                    height="35"
                  />
                </a>
              </div>
              <div className="col-md-4">
                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                  <input
                    autoComplete="off"
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                  />
                  <span className="input-group-text border-0 d-none d-lg-flex">
                    <i className="fas fa-search"></i>
                  </span>
                </form>
              </div>
              <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                <div className="d-flex">
                  <a className="text-reset me-3" href="#">
                    <span>
                      <i className="fas fa-shopping-cart"></i>
                    </span>
                    <span className="badge rounded-pill badge-notification bg-danger">
                      1
                    </span>
                  </a>
                  <div className="dropdown">
                    <a
                      className="text-reset me-3 dropdown-toggle hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Some news
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another news
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown"></div>
                  <div className="dropdown">
                    <a
                      className="text-reset dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                        className="rounded-circle"
                        height="22"
                        alt=""
                        loading="lazy"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          My profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container justify-content-center justify-content-md-between">
            <ul className="navbar-nav flex-row"></ul>
            <div className="Nav-div">
              <h1
                onClick={(e) => {
                  NavJS(e);
                }}
                className="btn btn-light"
              >
                Item
              </h1>
              <h1
                className="btn btn-light"
                onClick={(e) => {
                  NavJS(e);
                }}
              >
                Item
              </h1>
              <h1
                className="btn btn-light"
                onClick={(e) => {
                  NavJS(e);
                }}
              >
                Item
              </h1>
              <h1
                className="btn btn-light"
                onClick={(e) => {
                  NavJS(e);
                }}
              >
                Item
              </h1>
            </div>
            <button
              className="btn btn-outline-primary"
              data-mdb-ripple-color="dark"
              type="button"
            >
              Download app<i className="fas fa-download ms-2"></i>
            </button>
          </div>
        </nav>

        <div
          id="intro"
          className="bg-image shadow-1-strong"
          style={{
            backgroundImage:
              "url(https://mdbootstrap.com/img/new/slides/310.jpg)",
            height: "500px",
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="container d-flex align-items-center justify-content-center text-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Autumn sale</h1>
                <h4 className="mb-4">Promotions up to 70%!</h4>
                <a
                  className="btn btn-outline-light btn-lg mb-3"
                  href="#!"
                  role="button"
                >
                  See the promotional offer
                  <i className="fas fa-gem ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
