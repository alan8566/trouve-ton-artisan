import { useEffect, useState } from "react";
import { fetchArtisans } from "../api/api.js";
import ArtisanCard from "../components/ArtisanCard.jsx";

function Home() {
  const [topArtisans, setTopArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans().then((data) => {
      const sorted = [...data].sort(
        (a, b) => (b.averageRating || 0) - (a.averageRating || 0)
      );
      setTopArtisans(sorted.slice(0, 3));
    });
  }, []);

  return (
    <div className="container">

      {/* SECTION : Comment trouver mon artisan ? */}
      <section className="my-5 fade-in">
        <h1 className="text-center mb-4 fw-bold slide-up">Comment trouver mon artisan ?</h1>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card h-100 shadow-sm text-center p-3 slide-up delay-1">
              <h2 className="display-6 fw-bold text-primary">1</h2>
              <p>Choisir la catégorie d’artisanat dans le menu.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm text-center p-3 slide-up delay-2">
              <h2 className="display-6 fw-bold text-primary">2</h2>
              <p>Choisir un artisan.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm text-center p-3 slide-up delay-3">
              <h2 className="display-6 fw-bold text-primary">3</h2>
              <p>Le contacter via le formulaire de contact.</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm text-center p-3 slide-up delay-4">
              <h2 className="display-6 fw-bold text-primary">4</h2>
              <p>Une réponse sera apportée sous 48h.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION : Artisans du mois */}
      <section className="my-5 fade-in">
        <h2 className="text-center mb-4 fw-bold slide-up">Les artisans du mois</h2>

        <div className="row">
          {topArtisans.map((artisan, index) => (
            <div key={artisan.id} className="col-md-4 slide-up delay-1">
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>

        {topArtisans.length === 0 && (
          <p className="text-center text-muted slide-up">Aucun artisan disponible pour le moment.</p>
        )}
      </section>

    </div>
  );
}

export default Home;
