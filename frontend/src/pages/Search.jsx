import { useState } from "react";
import { searchArtisans } from "../api/api";
import ArtisanCard from "../components/ArtisanCard";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    const data = await searchArtisans(value);
    setResults(data);
  }

  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Recherche d’artisans</h1>

      {/* Champ de recherche */}
      <input
        type="text"
        className="form-control form-control-lg mb-4"
        placeholder="Rechercher un artisan..."
        value={query}
        onChange={handleSearch}
        aria-label="Rechercher un artisan"
      />

      {/* Résultats */}
      <div className="row g-4">
        {results.length === 0 && query.length >= 2 && (
          <p className="text-center text-muted">Aucun artisan trouvé.</p>
        )}

        {results.map(a => (
          <div key={a.id} className="col-md-4">
            <ArtisanCard artisan={a} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Search;