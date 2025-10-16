"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap justify-center p-2">
      <SimpleWidget
        subtitle="Added Product"
        label="Contador"
        title={`${count}`}
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};
