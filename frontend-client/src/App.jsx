import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ================= HOME ================= */
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Plateforme de livraison locale</h1>
      <p>La localisation est obligatoire pour continuer</p>
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
  const [panier, setPanier] = useState([]);

  const produits = [
    { id: 1, name: "Pizza Fromage", price: 800, available: true },
    { id: 2, name: "Pizza Poulet", price: 900, available: true },
    { id: 3, name: "Pizza Viande", price: 1000, available: false }
  ];

  const ajouter = (p) => setPanier([...panier, p]);

  return (
    <div>
      <h1>Menu</h1>

      {produits.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h3>{p.name}</h3>
          <p>{p.price} DZD</p>

          {p.available ? (
            <button onClick={() => ajouter(p)}>Ajouter au panier</button>
          ) : (
            <p style={{ color: "red" }}>Non disponible</p>
          )}
        </div>
      ))}

      <button onClick={() => navigate("/cart")}>
        Aller au panier ({panier.length})
      </button>
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

/* ================= RESTAURANT ================= */
function RestaurantDashboard() {
  const [commandes, setCommandes] = useState([
    { id: 1, client: "Client 1", status: "En attente" },
    { id: 2, client: "Client 2", status: "En attente" }
  ]);

  const accepter = (id) =>
    setCommandes(commandes.map(c =>
      c.id === id ? { ...c, status: "Acceptée" } : c
    ));

  const prete = (id) =>
    setCommandes(commandes.map(c =>
      c.id === id ? { ...c, status: "Prête" } : c
    ));

  return (
    <div>
      <h1>Espace Restaurant</h1>

      {commandes.map(c => (
        <div key={c.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <p>Commande #{c.id} — {c.client}</p>
          <p>Statut : {c.status}</p>
          <button onClick={() => accepter(c.id)}>Accepter</button>
          <button onClick={() => prete(c.id)} style={{ marginLeft: 10 }}>
            Prête
          </button>
        </div>
      ))}
    </div>
  );
}

/* ================= LIVREUR ================= */
function LivreurDashboard() {
  const [status, setStatus] = useState("En attente");

  return (
    <div>
      <h1>Espace Livreur</h1>
      <p>Statut livraison : {status}</p>
      <button onClick={() => setStatus("En cours")}>Accepter</button>
      <button onClick={() => setStatus("Livrée")} style={{ marginLeft: 10 }}>
        Livrée
      </button>
    </div>
  );
}

/* ================= ADMIN ================= */
function AdminDashboard() {
  return (
    <div>
      <h1>Espace Admin</h1>
      <p>Gestion des restaurants et des livreurs</p>
    </div>
  );
}

/* ================= ABONNEMENT ================= */
function Abonnement({ actif, children }) {
  if (!actif) {
    return (
      <div>
        <h2>Abonnement requis</h2>
        <p>Veuillez contacter l’admin</p>
      </div>
    );
  }
  return children;
}

/* ================= LOCALISATION ================= */
function Localisation() {
  return (
    <div>
      <h2>Localisation activée</h2>
      <p>Position : Centre-ville</p>
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

        <Route
          path="/restaurant"
          element={
            <Abonnement actif={true}>
              <RestaurantDashboard />
            </Abonnement>
          }
        />

        <Route
          path="/livreur"
          element={
            <Abonnement actif={true}>
              <LivreurDashboard />
            </Abonnement>
          }
        />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/localisation" element={<Localisation />} />
      </Routes>
    </BrowserRouter>
  );
}
