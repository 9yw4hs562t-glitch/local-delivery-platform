export default function Cart() {
  const panier = [
    { id: 1, name: "Pizza Fromage", price: 800, quantity: 1 },
    { id: 2, name: "Boisson", price: 200, quantity: 2 }
  ];

  const total = panier.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Votre panier</h1>

      {panier.map((item) => (
        <div
          key={item.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>{item.name}</h3>
          <p>Quantité : {item.quantity}</p>
          <p>Prix : {item.price} DZD</p>
        </div>
      ))}

      <h2>Total : {total} DZD</h2>

      <button style={{ padding: "10px", fontSize: "16px" }}>
        Commander
      </button>
    </div>
  );
}
