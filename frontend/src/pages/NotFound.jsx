import "../styles/notfound.scss";

function NotFound() {
  return (
    <div className="notfound-page">

      <div className="robot">
        <div className="antenna"></div>
        <div className="eye left"></div>
        <div className="eye right"></div>
      </div>

      <h1 className="big-404">404</h1>
      <h2>Oups… Notre petit robot est perdu</h2>
      <p>La page que vous cherchez n’existe pas ou a été déplacée.</p>

      <a href="/" className="btn btn-light btn-lg mt-3">
        Retour à l’accueil
      </a>

    </div>
  );
}

export default NotFound;