// Problem solved: centralizes cart behavior so artwork added on the product
// page is the same cart reviewed and edited during checkout.
// Purpose: provide cart items, quantity actions, removal, and calculated totals
// through React context to any component in the shopping flow.
// Development approach: keep cart mutations in small focused functions, derive
// subtotal/shipping/tax/total from cart state, and memoize the provider value.
import { useMemo, useState } from "react";
import { artworkProducts } from "../data/artworkProducts.js";
import { CheckoutContext } from "./CheckoutStore.js";

const starterCart = [
  { ...artworkProducts[0], quantity: 1 },
  { ...artworkProducts[1], quantity: 1 },
];

export function CheckoutProvider({ children }) {
  const [cartItems, setCartItems] = useState(starterCart);

  // Adds a new artwork or increments quantity when the artwork is already in cart.
  function addItem(product) {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  function removeItem(productId) {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, nextQuantity) {
    // Checkout quantities should never drop below one while an item remains in cart.
    const quantity = Math.max(1, Number(nextQuantity) || 1);

    setCartItems((items) =>
      items.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function decreaseQuantity(productId) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  }

  function increaseQuantity(productId) {
    setCartItems((items) =>
      items.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const value = useMemo(() => {
    // Totals are derived from cart state instead of stored separately to avoid drift.
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const shipping = subtotal >= 75 || subtotal === 0 ? 0 : 8.95;
    const tax = subtotal * 0.0825;
    const total = subtotal + shipping + tax;
    const itemCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return {
      addItem,
      cartItems,
      clearCart,
      decreaseQuantity,
      increaseQuantity,
      itemCount,
      removeItem,
      shipping,
      subtotal,
      tax,
      total,
      updateQuantity,
    };
  }, [cartItems]);

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}
