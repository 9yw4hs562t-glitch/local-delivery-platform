export default function Menu() {
  const produits = [
    { id: 1, name: "Pizza Fromage", price: 800, available: true },
    { id: 2, name: "Pizza Poulet", price: 900, available: true },
    { id: 3, name: "Pizza Viande", price: 1000, available: false },
    { id: 4, name: "Boisson", price: 200, available: true }
  ];

  return (
    <div>
      <h1>Menu</h1>

      {produits.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{p.name}</h3>
          <p>Prix : {p.price} DZD</p>

          {p.available ? (
            <button>Ajouter au panier</button>
          ) : (
            <p style={{ color: "red" }}>Non disponible</p>
          )}
        </div>
      ))}
    </div>
  );
}
