import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ShoppingDrawer from "./components/ShoppingDrawer";

const App = () => {
  return (
    <ShoppingCartProvider>
      <ShoppingDrawer>
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ShoppingDrawer>
    </ShoppingCartProvider>
  );
};

export default App;
