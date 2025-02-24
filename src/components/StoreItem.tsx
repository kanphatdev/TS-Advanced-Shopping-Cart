import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity = 1; // Placeholder quantity (no functionality)

  return (
    <div className="card bg-base-300 shadow-xl rounded-2xl overflow-hidden border border-gray-200 w-80">
      <figure>
        <img src={imgUrl} alt={name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body p-5">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-lg font-semibold">{name}</h2>
          <span className="text-gray-500 font-medium">
            {formatCurrency(price)}
          </span>
        </div>

        <div className="mt-4">
          {quantity === 0 ? (
            <button className="btn btn-accent w-full flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3 bg-base-200 p-2 rounded-lg shadow-inner">
                <button className="btn btn-sm btn-success">
                  <Plus />
                </button>
                <span className="text-lg font-semibold text-gray-700">
                  {quantity}
                </span>
                <button className="btn btn-sm btn-error">
                  <Minus />
                </button>
              </div>
              <button className="btn btn-error w-full flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Remove from Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
