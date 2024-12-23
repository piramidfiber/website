"use client";
import { useState } from "react";

function ShowProductsComponent({ categoryData, index }: any) {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2 border">
      <div
        onClick={() => setShowProducts(!showProducts)}
        className="flex gap-2 cursor-pointer px-3 py-1.5 bg-gray-100 w-full"
      >
        <p>{index + 1}</p>
        <p>{categoryData.name}</p>
      </div>
      {showProducts && (
        <div className="pl-5">
          {categoryData.products?.map((product: any, idx: number) => (
            <div key={idx} className="py-2">
              <p>{product.name || "Unnamed Product"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowProductsComponent;
