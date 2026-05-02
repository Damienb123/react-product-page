// Problem solved: creates the shared checkout context without mixing it into the
// provider component file, which keeps React Fast Refresh happy.
// Purpose: expose a single context object that the provider and checkout hook
// can both import.
// Development approach: keep this module intentionally tiny and free of render
// logic so state ownership remains in CheckoutContext.jsx.
import { createContext } from "react";

export const CheckoutContext = createContext(null);
