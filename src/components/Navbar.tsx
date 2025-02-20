import { NavLink } from "react-router-dom";
import ShoppingDrawer from "./ShoppingDrawer";

import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar sticky bg-base-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
       

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `capitalize text-lg ${isActive ? "text-primary font-bold" : "text-neutral"}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/store" 
            className={({ isActive }) => 
              `capitalize text-lg ${isActive ? "text-primary font-bold" : "text-neutral"}`
            }
          >
            Store
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `capitalize text-lg ${isActive ? "text-primary font-bold" : "text-neutral"}`
            }
          >
            About
          </NavLink>
        </div>

        {/* Right Side - Shopping Cart & Mobile Menu */}
        <div className="flex items-center gap-4">
          <ShoppingDrawer />
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neutral text-2xl" 
            onClick={() => setIsOpen(!isOpen)}
          >
           <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-base-100 shadow-lg absolute w-full left-0 top-16 py-4">
          <div className="flex flex-col items-center gap-4">
            <NavLink 
              to="/" 
              className="text-lg text-neutral capitalize"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/store" 
              className="text-lg text-neutral capitalize"
              onClick={() => setIsOpen(false)}
            >
              Store
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-lg text-neutral capitalize"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
