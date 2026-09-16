import CartItem from "./CartItem";
import "./cart.css";

export default function Cart({ cart, removeFromCart, addToCart }) {
  return (
    <section className="cart">
      <h2>Plant Shopping Cart</h2>

      <ul>
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </section>
  );
}
