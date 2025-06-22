import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="navbar">
      {" "}
      <div className="logo">PetAdoption</div>{" "}
      {/* Hamburger Menu Icon (Visible on small screens) */}{" "}
      <div className="hamburger" onClick={toggleMenu}>
        {" "}
        {menuOpen ? <FaTimes /> : <FaBars />}{" "}
      </div>{" "}
      {/* Main Navigation */}{" "}
      <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        {" "}
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>{" "}
        <Link to="/about" onClick={closeMenu}>
          About Us
        </Link>{" "}
        <div className="dropdown">
          {" "}
          <Link
            to="#"
            className="dropdown-toggle"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            {" "}
            Pets{" "}
          </Link>{" "}
          {dropdownOpen && (
            <div className="dropdown-menu">
              {" "}
              <Link
                to="/pets/dogs"
                onClick={() => {
                  closeMenu();
                  closeDropdown();
                }}
              >
                Dogs
              </Link>{" "}
              <Link
                to="/pets/cats"
                onClick={() => {
                  closeMenu();
                  closeDropdown();
                }}
              >
                Cats
              </Link>{" "}
              <Link
                to="/pets/birds"
                onClick={() => {
                  closeMenu();
                  closeDropdown();
                }}
              >
                Birds
              </Link>{" "}
            </div>
          )}{" "}
        </div>{" "}
        <Link to="/list-pet" onClick={closeMenu}>
          List Your Pet
        </Link>{" "}
        <Link to="/adoption-form" onClick={closeMenu}>
          Adopt a Pet
        </Link>{" "}
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>{" "}
      </nav>{" "}
      <Link to="/loginform" className="profile-icon-link">
        {" "}
        <FaUserCircle className="profile-icon" />{" "}
      </Link>{" "}
    </header>
  );
}
