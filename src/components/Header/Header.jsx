import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header({ isLoggedIn, handleLogInClick }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser?.name);

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
            <NavLink className="header__nav-link" to="/saved-news">
              <button className="header__saved-articles-btn">
                Saved articles
              </button>
            </NavLink>
            <div className="header__user-info">
              <p className="header__username">{currentUser?.name}</p>
            </div>
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
