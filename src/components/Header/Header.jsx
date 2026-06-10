import "./Header.css";

function Header({}) {
  return (
    <header className="header">
      NewsExplorer{" "}
      <NavLink className="header__nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="header__nav-link" to="/saved-news">
        Saved articles
      </NavLink>
    </header>
  );
}
