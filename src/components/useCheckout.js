// Problem solved: gives components a safe, readable way to access checkout
// state without importing useContext and CheckoutContext everywhere.
// Purpose: act as the public hook for cart actions, cart items, and checkout
// totals.
// Development approach: wrap React context access and fail early if a component
// is rendered outside CheckoutProvider.
import { useContext } from "react";
import { CheckoutContext } from "./CheckoutStore.js";

export function useCheckout() {
  const context = useContext(CheckoutContext);

  // A clear error here makes provider wiring problems faster to diagnose.
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }

  return context;
}
