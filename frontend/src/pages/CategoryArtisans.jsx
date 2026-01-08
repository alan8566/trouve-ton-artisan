import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArtisansByCategory } from "../api/api.js";
import ArtisanCard from "../components/ArtisanCard.jsx";

function CategoryArtisans() {
  const { id } = useParams();
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisansByCategory(id).then(setArtisans);
  }, [id]);

  return (
    <section className="container my-4">
      <h2 className="mb-4">Artisans de la catégorie</h2>

      <div className="row g-4">
        {artisans.map((artisan) => (
          <div key={artisan.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ArtisanCard artisan={artisan} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryArtisans;