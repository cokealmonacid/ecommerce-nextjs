import { CounterCartProps } from "@/utils/interfaces";
import { useCartStore } from "@/utils/store";

const CounterCart = ({ product }: CounterCartProps) => {
  const { addToCart, removeFromCart } = useCartStore();

  const handleAddProduct = () => {
    addToCart(product);
  };

  const handleRemoveProduct = () => {
    if (product.quantity > 1) {
      removeFromCart(product);
    }
  };

  return (
    <div className="flex justify-around items-center border-2 border-stone-900 rounded mt-1 w-[90px] h-[35px]">
      <button type="button" className={`text-2xl cursor-pointer text-stone-400 ${product.quantity > 1 ?"'hover:text-stone-900" : ""}`} onClick={handleRemoveProduct}>-</button>
      <div className="text-xl">{product.quantity}</div>
      <button type="button" className="text-2xl cursor-pointer text-stone-400 hover:text-stone-900" onClick={handleAddProduct}>+</button>
    </div>
  );
};


export default CounterCart;
