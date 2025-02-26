import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartSummary } from "./ShoppingCartSummary";

type ShoppingDrawerProps = {
  children: ReactNode;
};

const ShoppingDrawer = ({ children }: ShoppingDrawerProps) => {
  const { cartQuantity } = useShoppingCart();

  return (
    <div className="drawer">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar at the top */}
        <div className="w-full bg-base-200 shadow-md fixed top-0 z-50">
          <div className="navbar container mx-auto px-4">
            {/* Logo / Brand Name */}
            <div className="flex-1">
              <NavLink to="/" className="btn btn-ghost text-xl">
                MyStore
              </NavLink>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `btn btn-ghost ${isActive ? "btn-active" : ""}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/store"
                className={({ isActive }) =>
                  `btn btn-ghost ${isActive ? "btn-active" : ""}`
                }
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `btn btn-ghost ${isActive ? "btn-active" : ""}`
                }
              >
                About
              </NavLink>
            </div>

            {/* Shopping Cart Button (Hidden if cart is empty) */}
            <div className="flex-none">
              {cartQuantity > 0 && (
                <label
                  htmlFor="cart-drawer"
                  className="btn btn-warning btn-outline indicator"
                >
                  <span className="indicator-item badge badge-error">
                    {cartQuantity}
                  </span>
                  <ShoppingCart className="w-6 h-6" />
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 pt-16">{children}</div>
      </div>

      {/* Drawer Sidebar (Only shown if cart has items) */}
      {cartQuantity > 0 && (
        <div className="drawer-side z-50">
          <label htmlFor="cart-drawer" className="drawer-overlay"></label>
          <div className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
            <h2 className="text-lg font-bold">Shopping Cart ({cartQuantity})</h2>
            {/* Cart items go here */}
            <ShoppingCartSummary/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingDrawer;
