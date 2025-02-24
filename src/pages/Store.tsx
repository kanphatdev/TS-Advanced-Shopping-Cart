import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json"; // Fixed variable name for clarity

const Store = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item} /> // Using `id` instead of `index`
      ))}
    </div>
  );
};

export default Store;
