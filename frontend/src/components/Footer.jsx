import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-gradient footer-glass pt-5 pb-4 mt-5">
      <div className="container text-white">

        <div className="row justify-content-center text-center">

          {/* MENU LÉGAL */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Pages légales</h5>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales" className="footer-link">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles" className="footer-link">Données personnelles</Link></li>
              <li><Link to="/accessibilite" className="footer-link">Accessibilité</Link></li>
              <li><Link to="/cookies" className="footer-link">Cookies</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="mb-0 opacity-90">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              +33 (0)4 26 73 40 00
            </p>
          </div>

        </div>

        <hr className="footer-separator" />

        <p className="text-center opacity-75 mb-0 mt-3">
          © {new Date().getFullYear()} Région Auvergne-Rhône-Alpes — Trouve ton artisan
        </p>

      </div>
    </footer>
  );
}

export default Footer;