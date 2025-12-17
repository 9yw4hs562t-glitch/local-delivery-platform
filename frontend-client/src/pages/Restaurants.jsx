export default function Restaurants() {
  const restaurants = [
    { id: 1, name: "Pizza Milano", type: "Pizzeria", distance: "0.5 km" },
    { id: 2, name: "Fast Food City", type: "Restaurant", distance: "1.2 km" },
    { id: 3, name: "Pizza Napoli", type: "Pizzeria", distance: "2 km" }
  ];

  return (
    <div>
      <h1>Restaurants proches de vous</h1>

      {restaurants.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{r.name}</h3>
          <p>{r.type}</p>
          <p>Distance : {r.distance}</p>
          <button>Voir le menu</button>
        </div>
      ))}
    </div>
  );
}
