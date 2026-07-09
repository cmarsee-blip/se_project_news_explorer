import React, { useContext, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import logoutIcon from "../../assets/logout.png";

function Header({ isLoggedIn, handleLogInClick, handleLogOutClick }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header
        className={`header ${location === "/saved-news" ? "header_type_saved" : ""}`}
      >
        <NavLink className="header__logo" to="/">
          NewsExplorer
        </NavLink>

        <div className="header__nav-links">
          <NavLink
            className={`header__nav-link header__nav-link_home ${location === "/" ? "header__nav-link_active" : ""}`}
            to="/"
          >
            Home
          </NavLink>

          {isLoggedIn ? (
            <div className="header__user-container">
              <NavLink
                className={`header__nav-link header__nav-link_saved ${location === "/saved-news" ? "header__nav-link_active" : ""} `}
                to="/saved-news"
              >
                Saved articles
              </NavLink>

              <button onClick={handleLogOutClick} className="header__username">
                {currentUser?.name || "Cody"}
                <img
                  src={logoutIcon}
                  alt="logout"
                  className="header__logout-icon"
                  aria-hidden="true"
                />
              </button>
            </div>
          ) : (
            <div className="header__auth-container">
              <button onClick={handleLogInClick} className="header__signin-btn">
                Sign In
              </button>
            </div>
          )}
        </div>

        <button
          className="header__menu-btn"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </header>

      {isMobileMenuOpen && (
        <>
          <div className="header__mobile-menu-panel">
            <NavLink
              className="header__mobile-menu-link"
              to="/"
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>

            {isLoggedIn ? (
              <>
                <NavLink
                  className="header__mobile-menu-link"
                  to="/saved-news"
                  onClick={closeMobileMenu}
                >
                  Saved articles
                </NavLink>
                <button
                  className="header__mobile-menu-signout"
                  onClick={() => {
                    handleLogOutClick();
                    closeMobileMenu();
                  }}
                >
                  {currentUser?.name || "Cody"}
                  <img
                    src={logoutIcon}
                    alt="logout"
                    className="header__logout-icon"
                    aria-hidden="true"
                  />
                </button>
              </>
            ) : (
              <button
                className="header__mobile-menu-signin"
                onClick={() => {
                  handleLogInClick();
                  closeMobileMenu();
                }}
              >
                Sign in
              </button>
            )}
          </div>
          <div className="header__mobile-backdrop" onClick={closeMobileMenu} />
        </>
      )}
    </>
  );
}

export default Header;
