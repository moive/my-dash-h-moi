import { Metadata } from "next";
import { CartCounter } from "../shopping-cart/components";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "A simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Producs in the shopping cart</span>
      <CartCounter value={20} />
    </div>
  );
}
