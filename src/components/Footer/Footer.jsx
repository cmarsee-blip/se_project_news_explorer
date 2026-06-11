import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Supersite, Powered By News API
      </p>
      <p className="footer_links">Home TripleTen GitHub LinkedIn</p>
    </footer>
  );
}

export default Footer;
