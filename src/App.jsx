import { useState } from "react";

import PLANTS from "./data";
import Plants from "./plants/Plants";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExists = cart.find((item) => {
      return item.id === plant.id;
    });

    if (itemExists) {
      const newCart = cart.map((cartItem) => {
        return cartItem.id === plant.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });

      setCart(newCart);
    } else {
      const newItem = { ...plant, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (plant) => {
    const newCart = cart.map((cartItem) => {
      return cartItem.id === plant.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });

    const filteredCart = newCart.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    setCart(filteredCart);
  };
  return (
    <>
      <h1>Welcome to Proper Plants</h1>

      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
      </main>
    </>
  );
}
