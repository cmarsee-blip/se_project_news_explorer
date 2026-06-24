import "./Footer.css";
import githubLogo from "../../assets/githubLogo.svg";
import LinkedIn from "../../assets/LinkedIn.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Supersite, Powered By News API
      </p>
      <nav className="footer__links_wrapper">
        <ul className="footer__links">
          <li>
            <a href="#" className="footer__link footer__home" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a
              href="https://tripleten.com/"
              className="footer__link_tripleten"
              target="_blank"
            >
              TriplenTen
            </a>
          </li>
        </ul>
        <ul className="footer__social_links">
          <li>
            <a
              href="https://github.com/cmarsee-blip"
              className="footer__link_github"
              target="_blank"
            >
              <img
                src={githubLogo}
                alt="GitHub Logo"
                className="footer__link-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/codymarsee"
              className="footer__link_linkedin"
              target="_blank"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn Logo"
                className="footer__link-icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
