import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ReactNode } from "react";

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
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">MyStore</a>
            </div>
            <div className="flex-none">
              {/* Shopping Cart Button */}
              <label
                htmlFor="cart-drawer"
                className="btn btn-warning btn-outline indicator"
              >
                <span className="indicator-item badge badge-error">
                  {cartQuantity}
                </span>
                <ShoppingCart className="w-6 h-6" />
              </label>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 pt-16">{children}</div>
      </div>

      {/* Drawer Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="cart-drawer" className="drawer-overlay"></label>
        <div className="menu bg-base-100 text-base-content min-h-full w-80 p-4">
          <h2 className="text-lg font-bold">Shopping Cart({cartQuantity})</h2>
          {/* Cart items go here */}
        </div>
      </div>
    </div>
  );
};

export default ShoppingDrawer;
