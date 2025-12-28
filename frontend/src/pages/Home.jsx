import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtisan } from "../api/api";

function Artisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    getArtisan(id).then(setArtisan);
  }, [id]);

  if (!artisan) return <p className="text-center mt-5">Chargement...</p>;

  return (
    <div className="container py-5">
      <h1>{artisan.companyName}</h1>
      <p>Ville : {artisan.city}</p>
      <p>Note : ⭐ {artisan.note}</p>
      <p>Spécialité : {artisan.categories[0]?.name}</p>

      <h3 className="mt-4">À propos</h3>
      <p>{artisan.description}</p>

      {artisan.website && (
        <p>
          Site web : <a href={artisan.website}>{artisan.website}</a>
        </p>
      )}

      <h3 className="mt-4">Contacter l’artisan</h3>

      <form className="mt-3">
        <input className="form-control mb-2" placeholder="Votre nom" />
        <input className="form-control mb-2" placeholder="Votre email" />
        <input className="form-control mb-2" placeholder="Objet" />
        <textarea className="form-control mb-2" placeholder="Message"></textarea>
        <button className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}

export default Artisan;