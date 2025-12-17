import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Plateforme de livraison locale</h1>
      <p>Autorisez la localisation pour continuer.</p>

      <button onClick={() => navigate("/restaurants")}>
        Autoriser la localisation
      </button>
    </div>
  );
}
