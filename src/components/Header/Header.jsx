import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  isLoggedIn,
  handleLogInClick,
  handleLogOutClick,
  handleSearch,
  isModalOpen,
}) {
  const location = useLocation().pathname;

  return (
    <header
      className={`header ${location === "/saved-news" ? "header_type_saved" : ""} ${location === "/" ? "header_type_home" : ""}`}
    >
      <Navigation
        isLoggedIn={isLoggedIn}
        handleLogInClick={handleLogInClick}
        handleLogOutClick={handleLogOutClick}
        isModalOpen={isModalOpen}
      />
      {location === "/" && <SearchForm handleSearch={handleSearch} />}
    </header>
  );
}

export default Header;
