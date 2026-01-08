import { Link } from "react-router-dom";
import StarRating from "./StarRating.jsx";

function ArtisanCard({ artisan }) {
  return (
    <div className="card mb-3 shadow-sm card-glass card-gradient card-accent-success">
      {/* IMAGE */}
      <img
        src={
          artisan.imageUrl ||
          "https://via.placeholder.com/600x400?text=Artisan"
        }
        alt={artisan.companyName}
        className="card-img-top img-fluid rounded-top"
        style={{ objectFit: "cover", height: "200px" }}
      />

      <div className="card-body">
        {/* BADGES */}
        <div className="d-flex gap-2 mb-2">
          <span className="badge badge-top">Top artisan</span>
          <span className="badge badge-hot">Populaire</span>
        </div>

        <h5 className="card-title fw-bold">
          {artisan.companyName || `${artisan.firstName} ${artisan.lastName}`}
        </h5>

        <StarRating rating={artisan.rating || 0} />

        <p className="text-light mb-1">{artisan.speciality}</p>
        <p className="text-light">{artisan.city}</p>

        <Link
          to={`/artisans/${artisan.id}`}
          className="btn btn-primary mt-2 btn-card"
        >
          Voir la fiche
        </Link>
      </div>
    </div>
  );
}

export default ArtisanCard;