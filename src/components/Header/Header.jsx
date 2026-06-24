import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/logout.png";

function Header({ isLoggedIn, handleLogInClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <header className="header">
      <NavLink className="header__logo" to="/">
        NewsExplorer
      </NavLink>

      <div className="header__nav-links">
        <NavLink className="header__nav-link header__nav-link_home" to="/">
          Home
        </NavLink>

        {isLoggedIn ? (
          <div className="header__user-container">
            <NavLink
              className="header__nav-link header__nav-link_saved"
              to="/saved-news"
            >
              Saved articles
            </NavLink>

            <span className="header__username">
              {currentUser?.name || "Cody"}
              <img
                src={logoutIcon}
                alt="logout"
                className="header__logout-icon"
                aria-hidden="true"
              />
            </span>
          </div>
        ) : (
          <div className="header__auth-container">
            <button onClick={handleLogInClick} className="header__signin-btn">
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
