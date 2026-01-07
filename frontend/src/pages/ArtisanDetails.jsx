import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArtisanById } from "../api/api.js";
import StarRating from "../components/StarRating.jsx";

function ArtisanDetails() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    fetchArtisanById(id).then(setArtisan);
  }, [id]);

  if (!artisan) return <p className="text-center mt-5">Chargement...</p>;

  return (
    <div className="container my-5 fade-in">

      <div className="row g-4 align-items-center">

        {/* PHOTO */}
        <div className="col-md-4 text-center">
          <img
            src={`https://via.placeholder.com/300x300.png?text=${encodeURIComponent(
              artisan.companyName || artisan.firstName
            )}`}
            alt="Photo artisan"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* INFOS */}
        <div className="col-md-8">
          <h2 className="fw-bold">{artisan.companyName || `${artisan.firstName} ${artisan.lastName}`}</h2>
          <StarRating rating={artisan.rating || 0} />
          <p className="mt-3">
            <strong>Spécialité :</strong> {artisan.specialty}
          </p>
          <p>
            <strong>Localisation :</strong> {artisan.city}
          </p>

          <h4 className="mt-4">À propos</h4>
          <p>{artisan.description || "Description non renseignée."}</p>
        </div>
      </div>

      {/* FORMULAIRE DE CONTACT */}
      <div className="mt-5">
        <h3 className="mb-3">Contacter cet artisan</h3>

        <form className="row g-3 slide-up">
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Votre nom" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Votre email" required />
          </div>
          <div className="col-12">
            <input type="text" className="form-control" placeholder="Objet du message" />
          </div>
          <div className="col-12">
            <textarea className="form-control" rows="4" placeholder="Votre message..." required></textarea>
          </div>
          <div className="col-12 text-end">
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default ArtisanDetails;