import { Link } from "react-router-dom";
import API_URL from "../services/api";
import axios from "axios";

axios.get(`${API_URL}/artisans`)
  .then(res => console.log(res.data));

function ArtisanCard({ artisan }) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">

        <h5 className="card-title fw-bold">{artisan.companyName}</h5>

        <p className="text-warning mb-1">
          {"⭐".repeat(Math.round(artisan.note))}
        </p>

        <p className="text-muted mb-1">
          {artisan.categories?.[0]?.name}
        </p>

        <p className="text-secondary">
          📍 {artisan.city}
        </p>

        <Link to={`/artisan/${artisan.id}`} className="btn btn-primary w-100">
          Voir la fiche
        </Link>
      </div>
    </div>
  );
}

export default ArtisanCard;