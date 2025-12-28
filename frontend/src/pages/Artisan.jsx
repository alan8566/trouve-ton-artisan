import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtisan } from "../api/api";

function Artisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    getArtisan(id).then(setArtisan);
  }, [id]);

  if (!artisan) {
    return <p className="text-center mt-5">Chargement...</p>;
  }

  return (
    <div className="container py-5">

      {/* TITRE */}
      <h1 className="fw-bold mb-4">{artisan.companyName}</h1>

      <div className="row g-5">

        {/* COLONNE GAUCHE */}
        <div className="col-md-4">

          {/* IMAGE / LOGO */}
          <div className="artisan-image mb-4">
            <img
              src={artisan.image || "/placeholder.jpg"}
              alt={artisan.companyName}
              className="img-fluid rounded shadow"
            />
          </div>

          {/* NOTE */}
          <p className="text-warning fs-4">
            {"⭐".repeat(Math.round(artisan.note))}
          </p>

          {/* SPÉCIALITÉ */}
          <p className="fw-bold text-primary">
            {artisan.categories?.[0]?.name}
          </p>

          {/* LOCALISATION */}
          <p className="text-secondary">
            📍 {artisan.city}
          </p>

          {/* SITE WEB */}
          {artisan.website && (
            <p>
              🌐 <a href={artisan.website} target="_blank" rel="noreferrer">
                {artisan.website}
              </a>
            </p>
          )}
        </div>

        {/* COLONNE DROITE */}
        <div className="col-md-8">

          {/* À PROPOS */}
          <h3 className="mb-3">À propos</h3>
          <p className="mb-4">
            {artisan.description || "Cet artisan n’a pas encore ajouté de description."}
          </p>

          {/* FORMULAIRE DE CONTACT */}
          <h3 className="mb-3">Contacter l’artisan</h3>

          <form className="contact-form">

            <div className="mb-3">
              <label className="form-label">Votre nom</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Votre email</label>
              <input type="email" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Objet</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" required></textarea>
            </div>

            <button className="btn btn-primary btn-lg w-100">
              Envoyer le message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Artisan;