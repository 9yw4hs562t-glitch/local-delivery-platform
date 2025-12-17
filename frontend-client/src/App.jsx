import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

/* ================= HOME ================= */
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Plateforme de livraison locale</h1>
      <p>Autorisez la localisation pour continuer</p>
      <button onClick={() => navigate("/restaurants")}>
        Autoriser la localisation
      </button>
    </div>
  );
}

/* ================= RESTAURANTS ================= */
function Restaurants() {
  const navigate = useNavigate();

  const restaurants = [
    { id: 1, name: "Pizza Milano", type: "Pizzeria", distance: "0.5 km" },
    { id: 2, name: "Fast Food City", type: "Restaurant", distance: "1.2 km" }
  ];

  return (
    <div>
      <h1>Restaurants proches</h1>

      {restaurants.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{r.name}</h3>
          <p>{r.type}</p>
          <p>{r.distance}</p>
          <button onClick={() => navigate("/menu")}>Voir le menu</button>
        </div>
      ))}
    </div>
  );
}

/* ================= MENU ================= */
function Menu() {
  const navigate = useNavigate();

  const produits = [
    { id: 1, name: "Pizza Fromage", price: 800, available: true },
    { id: 2, name: "Pizza Poulet", price: 900, available: true },
    { id: 3, name: "Pizza Viande", price: 1000, available: false }
  ];

  return (
    <div>
      <h1>Menu</h1>

      {produits.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>{p.price} DZD</p>

          {p.available ? (
            <button>Ajouter au panier</button>
          ) : (
            <p style={{ color: "red" }}>Non disponible</p>
          )}
        </div>
      ))}

      <button onClick={() => navigate("/cart")}>Aller au panier</button>
    </div>
  );
}

/* ================= PANIER ================= */
function Cart() {
  const panier = [
    { id: 1, name: "Pizza Fromage", price: 800, qty: 1 },
    { id: 2, name: "Boisson", price: 200, qty: 2 }
  ];

  const total = panier.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <div>
      <h1>Panier</h1>

      {panier.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>Quantité : {p.qty}</p>
          <p>Prix : {p.price} DZD</p>
        </div>
      ))}

      <h2>Total : {total} DZD</h2>
      <button>Commander</button>
    </div>
  );
}
/* ========== RESTAURANT DASHBOARD ========== */
function RestaurantDashboard() {
  const commandes = [
    {
      id: 1,
      client: "Client 1",
      items: ["Pizza Fromage", "Boisson"],
      status: "En attente"
    },
    {
      id: 2,
      client: "Client 2",
      items: ["Pizza Poulet"],
      status: "En attente"
    }
  ];

  return (
    <div>
      <h1>Espace Restaurant</h1>

      {commandes.map((c) => (
        <div
          key={c.id}
          style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
        >
          <h3>Commande #{c.id}</h3>
          <p>Client : {c.client}</p>
          <p>Produits :</p>
          <ul>
            {c.items.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>

          <button>Accepter la commande</button>
          <button style={{ marginLeft: 10 }}>Commande prête</button>
        </div>
      ))}
    </div>
  );
}
/* ========== LIVREUR DASHBOARD ========== */
function LivreurDashboard() {
  const livraison = {
    id: 101,
    restaurant: "Pizza Milano",
    client: "Client 1",
    adresse: "Centre-ville",
    status: "En attente"
  };

  return (
    <div>
      <h1>Espace Livreur</h1>

      <button style={{ marginBottom: 20 }}>
        Activer disponibilité
      </button>

      <div style={{ border: "1px solid #ccc", padding: 10 }}>
        <h3>Livraison #{livraison.id}</h3>
        <p>Restaurant : {livraison.restaurant}</p>
        <p>Client : {livraison.client}</p>
        <p>Adresse : {livraison.adresse}</p>

        <button>Accepter la livraison</button>
        <button style={{ marginLeft: 10 }}>Livraison terminée</button>
      </div>
    </div>
  );
}
/* ========== ADMIN DASHBOARD ========== */
function AdminDashboard() {
  const restaurants = [
    { id: 1, name: "Pizza Milano", abonnement: "Actif" },
    { id: 2, name: "Fast Food City", abonnement: "Expiré" }
  ];

  const livreurs = [
    { id: 1, name: "Livreur 1", abonnement: "Actif" },
    { id: 2, name: "Livreur 2", abonnement: "Expiré" }
  ];

  return (
    <div>
      <h1>Espace Admin</h1>

      <h2>Restaurants</h2>
      {restaurants.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>{r.name} — Abonnement : {r.abonnement}</p>
          <button>Activer</button>
          <button style={{ marginLeft: 5 }}>Désactiver</button>
        </div>
      ))}

      <h2>Livreurs</h2>
      {livreurs.map((l) => (
        <div key={l.id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>{l.name} — Abonnement : {l.abonnement}</p>
          <button>Activer</button>
          <button style={{ marginLeft: 5 }}>Désactiver</button>
        </div>
      ))}
    </div>
  );
}
/* ========== ADMIN DASHBOARD ========== */
function AdminDashboard() {
  const restaurants = [
    { id: 1, name: "Pizza Milano", abonnement: "Actif" },
    { id: 2, name: "Fast Food City", abonnement: "Expiré" }
  ];

  const livreurs = [
    { id: 1, name: "Livreur 1", abonnement: "Actif" },
    { id: 2, name: "Livreur 2", abonnement: "Expiré" }
  ];

  return (
    <div>
      <h1>Espace Admin</h1>

      <h2>Restaurants</h2>
      {restaurants.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>{r.name} — Abonnement : {r.abonnement}</p>
          <button>Activer</button>
          <button style={{ marginLeft: 5 }}>Désactiver</button>
        </div>
      ))}

      <h2>Livreurs</h2>
      {livreurs.map((l) => (
        <div key={l.id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>{l.name} — Abonnement : {l.abonnement}</p>
          <button>Activer</button>
          <button style={{ marginLeft: 5 }}>Désactiver</button>
        </div>
      ))}
    </div>
  );
}
/* ========== ADMIN DASHBOARD ========== */
function AdminDashboard() {
  const restaurants = [
    { id: 1, name: "Pizza Milano", abonnement: "Actif" },
    { id: 2, name: "Fast Food City", abonnement: "Expiré" }
  ];

  const livreurs = [
    { id: 1, name: "Livreur 1", abonnement: "Actif" },
    { id: 2, name: "Livreur 2", abonnement: "Expiré" }
  ];

  return (
    <div>
      <h1>Espace Admin</h1>

      <h2>Restaurants</h2>
      {restaurants.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>{r.name} — Abonnement : {r.abonnement}</p>
          <button>Activer</button>
          <button style={{ marginLeft: 5 }}>Désactiver</button>
        </div>
      ))}

      <h2>Livreurs</h2>
      {livreurs.map((l) => (
        <div key={l.id} style={{ border: "1px solid #ccc", margin: 5, padding: 5 }}>
          <p>{l.name} — Abonnement : {l.abonnement}</p>
          <button>Activer</button>
          <button style={{ marginLeft: 5 }}>Désactiver</button>
        </div>
      ))}
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant" element={<RestaurantDashboard />} />
        <Route path="/livreur" element={<LivreurDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}
