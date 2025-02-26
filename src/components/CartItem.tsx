import { Asterisk, Trash } from "lucide-react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (!item) return null;

  return (
    <div className="flex items-center justify-between bg-base-200 p-4 rounded-lg shadow-md">
      {/* Image */}
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-16 h-16 rounded-md object-cover"
      />

      {/* Item Details */}
      <div className="flex-1 px-4">
        <div className="font-semibold text-xs flex items-center gap-2">
          {item.name} 
          {quantity > 1 && (
            <span className="text-gray-400 text-sm flex items-center">
              {quantity} <Asterisk size={12} />
            </span>
          )}
        </div>
        <div className="text-gray-500 text-xs">{formatCurrency(item.price)}</div>
      </div>

      {/* Total Price */}
      <div className="text-xs font-semibold text-primary">
        {formatCurrency(item.price * quantity)}
      </div>

      {/* Remove Button */}
      <div className="card-actions">
              <button
        className="btn btn-outline btn-error btn-sm ml-4"
        onClick={() => removeFromCart(item.id)}
      >
        <Trash size={16} />
      </button>
      </div>

    </div>
  );
};
