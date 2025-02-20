import { ShoppingCart } from "lucide-react";

const ShoppingDrawer = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Hide button on small screens */}
        <label 
          htmlFor="my-drawer" 
          className="btn btn-warning btn-outline btn-circle drawer-button hidden sm:flex items-center justify-center p-2 indicator"
        >
              <span className="indicator-item badge badge-error">0</span>
          <ShoppingCart className="w-6 h-6" />
          
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4"></div>
      </div>
    </div>
  );
};

export default ShoppingDrawer;
