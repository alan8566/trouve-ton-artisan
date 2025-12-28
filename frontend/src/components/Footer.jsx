import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-5 py-5 text-white">
      <div className="container">

        <div className="row">

          {/* MENU LÉGAL */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Informations légales</h5>
            <ul className="list-unstyled mt-3">
              <li><Link className="footer-link" to="/legal?type=mentions">Mentions légales</Link></li>
              <li><Link className="footer-link" to="/legal?type=donnees">Données personnelles</Link></li>
              <li><Link className="footer-link" to="/legal?type=accessibilite">Accessibilité</Link></li>
              <li><Link className="footer-link" to="/legal?type=cookies">Cookies</Link></li>
            </ul>
          </div>

          {/* ADRESSE */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Antenne de Lyon</h5>
            <p className="mt-3">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France
            </p>
            <p className="mt-2">📞 +33 (0)4 26 73 40 00</p>
          </div>

          {/* LOGO / COPYRIGHT */}
          <div className="col-md-4 text-md-end text-center">
            <h5 className="fw-bold">Trouve ton artisan</h5>
            <p className="mt-3">© {new Date().getFullYear()} Région Auvergne‑Rhône‑Alpes</p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;