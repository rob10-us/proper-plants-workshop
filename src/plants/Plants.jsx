import Plant from "./Plant";

import "./plants.css";

export default function Plants({ plants, addToCart }) {
  return (
    <section className="plants">
      <h2>Plants for Sale</h2>

      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
