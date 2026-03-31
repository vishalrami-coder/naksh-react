import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import NakshLogo from "../assets/images/naksh-logo.webp";
import SearchModal from "./SearchModal";
import { Button } from "./Button";
import "../assets/css/Header.css";
import { fetchMenu } from "../features/menu/menuSlice";
import { FaCaretRight } from "react-icons/fa6";

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  console.log(data, 'data');



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`customHeader ${isSticky ? "stickyHeader" : ""}`}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">

            <Link className="navbar-brand" to="/">
              <img
                src={NakshLogo}
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

                {/* <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li> */}

                <li
                  className={`nav-item dropdown productDropdown ${isDropdownOpen ? "show" : ""}`}
                  onMouseEnter={() => window.innerWidth > 991 && setIsDropdownOpen(true)}
                  onMouseLeave={() => window.innerWidth > 991 && setIsDropdownOpen(false)}
                >
                  <span
                    className="nav-link dropdown-toggle"
                    onClick={() => { setIsDropdownOpen(!isDropdownOpen), navigate(`/products`) }}
                    style={{ cursor: "pointer" }}
                  >
                    Products
                  </span>

                  <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                    <div className="ProductGrid">

                      {data?.map((brand) => (
                        <div className="ProductItem" key={brand.id}>

                          {/* 🔥 Brand Name */}
                          <h5>{brand?.name}</h5>

                          {/* 🔥 Children (Category) */}
                          <ul>
                            {brand?.children?.length > 0 ? (
                              brand.children.map((child) => (
                                <li key={child.id}>
                                  <Link to={`/products/${brand.slug}/${child.slug}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <FaCaretRight /> {child.name}
                                  </Link>
                                </li>
                              ))
                            ) : (
                              <li>
                                <Link to={`/products/${brand.slug}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                  View All
                                </Link>
                              </li>
                            )}
                          </ul>

                        </div>
                      ))}

                    </div>
                  </ul>
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