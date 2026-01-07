import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api/api.js";

function Header() {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/artisans?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="header-gradient header-glass">
      <nav className="navbar navbar-expand-lg navbar-dark container py-3">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold fs-4 text-white" to="/">
          Trouve Ton Artisan
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* MENU DYNAMIQUE AVEC ID */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((cat) => (
              <li key={cat.id} className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/categories/${cat.id}/artisans`}
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* BARRE DE RECHERCHE */}
          <form className="d-flex search-bar" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher un artisan..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-light fw-bold" type="submit">
              Rechercher
            </button>
          </form>

        </div>
      </nav>
    </header>
  );
}

export default Header;