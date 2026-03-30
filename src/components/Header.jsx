import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./Button";

import "../assets/css/Header.css";
import SearchModal from "./SearchModal";

function Header() {
  return (
    <>
      <div className="customHeader">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">

            <Link className="navbar-brand" to="/">
              <img
                src="https://nakshtechnology.in/assets/images/naksh-technology-solution-llp-logo.svg"
                alt="logo"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/industries">Industries</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/blogs">Blogs</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact-us">Contact Us</Link>
                </li>

              </ul>

              <div className="rightSideBtn d-flex align-items-center gap-3">

                <div className="searchBtn" data-bs-toggle="modal" data-bs-target="#searchModal">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                {/* <div className="searchBtn" data-bs-toggle="modal" data-bs-target="#searchModal">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div> */}

                <Button className="readmore">
                  Start a quick quote
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <SearchModal />
    </>
  );
}

export default Header;