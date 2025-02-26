import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

export const ShoppingCartSummary = () => {
  const { cartItems } = useShoppingCart();

  return (
    <>
      <div className="card mt-4 p-4  ">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center p-4 rounded-lg shadow bg-base-300">
        <h1 className="text-lg font-bold capitalize">
          Total: {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </h1>
      </div>
    </>
  );
};
