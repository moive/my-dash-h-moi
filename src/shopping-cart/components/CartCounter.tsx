"use client";

interface Props {
  value?: number;
}

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne } from "@/store/counter/counterSlice";

export const CartCounter = ({ value = 10 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2 cursor-pointer"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2 cursor-pointer"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  );
};
