import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api/api";
import API_URL from "../services/api";
import axios from "axios";

axios.get(`${API_URL}/artisans`)
  .then(res => console.log(res.data));

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand" to="/">Trouve ton artisan</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">

            {categories.map(cat => (
              <li key={cat.id} className="nav-item">
                <Link className="nav-link" to={`/artisans?category=${cat.name}`}>
                  {cat.name}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <Link className="nav-link" to="/search">Recherche</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;