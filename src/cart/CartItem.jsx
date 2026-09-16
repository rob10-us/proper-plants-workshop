export default function CartItem({ cartItem, removeFromCart, addToCart }) {
  return (
    <li className="cart-item">
      <div>
        {cartItem.image} {cartItem.name}
      </div>

      <div className="cart-item-quantity">
        <button onClick={() => removeFromCart(cartItem)}>-</button>
        {cartItem.quantity}
        <button onClick={() => addToCart(cartItem)}>+</button>
      </div>
    </li>
  );
}
