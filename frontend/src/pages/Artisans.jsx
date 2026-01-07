import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchArtisans } from "../api/api.js";
import ArtisanCard from "../components/ArtisanCard.jsx";

function Artisans() {
  const [artisans, setArtisans] = useState([]);
  const location = useLocation();

  // Récupère ?q= depuis l’URL
  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    fetchArtisans().then((data) => {
      setArtisans(data);
    });
  }, []);

  // Filtrage dynamique selon la recherche
  const filteredArtisans = artisans.filter((artisan) =>
    `${artisan.firstName} ${artisan.lastName} ${artisan.companyName} ${artisan.speciality} ${artisan.city}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">
        {query ? `Résultats pour : "${query}"` : "Tous les artisans"}
      </h2>

      <div className="row g-4">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map((artisan) => (
            <div key={artisan.id} className="col-md-4">
              <ArtisanCard artisan={artisan} />
            </div>
          ))
        ) : (
          <p>Aucun artisan trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Artisans;