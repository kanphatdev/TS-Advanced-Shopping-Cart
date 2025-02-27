import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

// Define types
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  cartItems: CartItem[]; // Added so components can access the cart
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
};

// Create Context
const ShoppingCartContext = createContext({} as ShoppingCartContext);

// Custom Hook for using Shopping Cart Context
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

// Provider Component
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[]);
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  // Get the quantity of a specific item
  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  // Increase item quantity in cart
  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item.id === id)) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  // Decrease item quantity in cart
  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      return currItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity becomes 0
    });
  };

  // Remove an item completely from the cart
  const removeFromCart = (id: number) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems, // Now included in the context
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        openCart,closeCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
