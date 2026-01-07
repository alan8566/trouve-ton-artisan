import ArtisanCard from "../components/ArtisanCard.jsx";
import { useEffect, useState } from "react";
import { fetchArtisans } from "../api/api.js";

function Home() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans().then(setArtisans);
  }, []);

  return (
    <div className="container my-5 fade-in">

      {/* SECTION ÉTAPES */}
      <section className="mb-5">
        <h2 className="fw-bold text-center mb-4">Comment trouver mon artisan ?</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="step-box">
              <div className="step-number">1</div>
              <p>Choisir la catégorie d’artisanat dans le menu.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-box">
              <div className="step-number">2</div>
              <p>Choisir un artisan.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-box">
              <div className="step-number">3</div>
              <p>Le contacter via le formulaire de contact.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="step-box">
              <div className="step-number">4</div>
              <p>Une réponse sera apportée sous 48h.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ARTISANS */}
      <h2 className="fw-bold mb-4 text-center">Artisans du mois</h2>

      <div className="row g-4">
        {artisans.slice(0, 3).map((artisan) => (
          <div key={artisan.id} className="col-md-4">
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;