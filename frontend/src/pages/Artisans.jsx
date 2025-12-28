import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArtisans, getArtisansByCategory } from "../api/api";
import ArtisanCard from "../components/ArtisanCard";

function Artisans() {
  const [data, setData] = useState([]);
  const [params] = useSearchParams();
  const category = params.get("category");

  useEffect(() => {
    if (category) {
      getArtisansByCategory(category).then(setData);
    } else {
      getArtisans().then(setData);
    }
  }, [category]);

  return (
    <div className="container py-5">
      <h1 className="mb-4">
        {category ? `Artisans : ${category}` : "Tous les artisans"}
      </h1>

      <div className="row g-4">
        {data.map(a => (
          <div key={a.id} className="col-md-4">
            <ArtisanCard artisan={a} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artisans;