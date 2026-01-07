import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { searchArtisans, fetchArtisans } from "../api/api.js";

function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const location = useLocation();

  // Récupération du paramètre ?q= depuis la barre de recherche
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const loadArtisans = async () => {
      let data;

      if (query) {
        data = await searchArtisans({ q: query });
      } else {
        data = await fetchArtisans();
      }

      // Ajout du badge Top artisan (exemple : premier artisan)
      const withTop = data.map((a, i) => ({
        ...a,
        isTop: i === 0, 
      }));

      setArtisans(withTop);
    };

    loadArtisans();
  }, [query]);

  return (
    <div className="container py-4 fade-in">

      <h1 className="mb-4 fw-bold">
        {query ? `Résultats pour "${query}"` : "Tous les artisans"}
      </h1>

      {artisans.length === 0 && (
        <p className="text-muted">Aucun artisan trouvé.</p>
      )}

      <div className="row g-4">
        {artisans.map((artisan, index) => (
          <div className="col-md-6 col-lg-4" key={artisan.id}>
            
            <div className={`card card-premium slide-up delay-${(index % 4) + 1}`}>

              {/* BADGE TOP ARTISAN */}
              {artisan.isTop && (
                <div className="top-badge">Top artisan</div>
              )}

              {/* IMAGE */}
              <img
                src={`https://via.placeholder.com/600x400.png?text=${encodeURIComponent(
                  artisan.companyName || artisan.firstName
                )}`}
                className="card-img-top"
                alt="artisan"
              />

              {/* CONTENU */}
              <div className="card-body">
                <h5 className="card-title fw-bold">
                  {artisan.companyName || `${artisan.firstName} ${artisan.lastName}`}
                </h5>

                <p className="text-muted mb-1">{artisan.specialty}</p>
                <p className="text-muted">{artisan.city}</p>

                <Link
                  to={`/artisans/${artisan.id}`}
                  className="btn btn-primary w-100 mt-2"
                >
                  Voir le profil
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Artisans;