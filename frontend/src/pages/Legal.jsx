import { useSearchParams } from "react-router-dom";

function Legal() {
  const [params] = useSearchParams();
  const type = params.get("type");

  const titles = {
    mentions: "Mentions légales",
    donnees: "Données personnelles",
    accessibilite: "Accessibilité",
    cookies: "Cookies"
  };

  return (
    <div className="container py-5">
      <h1>{titles[type] || "Informations légales"}</h1>
      <p className="mt-4 text-muted">Page en construction…</p>
    </div>
  );
}

export default Legal;