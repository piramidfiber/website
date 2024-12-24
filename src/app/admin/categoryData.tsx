"use client";
import { PenBox, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ShowProductsComponent(params: any) {
  const index = params.index;
  const categoryData = JSON.parse(params.categoryData);
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div className="w-full flex flex-col gap-2 border">
      <div
        onClick={() => setShowProducts(!showProducts)}
        className="flex gap-2 select-none cursor-pointer px-3 py-1.5 bg-gray-100 w-full"
      >
        <p>{index + 1}</p>
        <p>{categoryData.name}</p>
      </div>
      {showProducts && (
        <div className="pl-5">
          {categoryData.products?.map((product: any, idx: number) => (
            <ProductCard key={idx} idx={idx} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowProductsComponent;

function ProductCard({ product, idx }: any) {
  const router = useRouter();
  async function handleDeleteProduct() {
    console.log(product._id);
    const response = await fetch("/api/deleteProduct", {
      method: "POST",
      body: JSON.stringify({
        id: product._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      router.refresh();
    }
  }
  return (
    <div key={idx} className=" grid grid-cols-12 py-2">
      <div className="h-8 flex gap-2 items-center">
        <p>{idx + 1}</p>
        <img
          className=" h-full max-w-12 object-contain w-auto"
          src={product.images[0]}
          alt=""
        />
      </div>
      <p className=" col-span-10">{product.name || "Unnamed Product"}</p>
      <div className=" flex items-center gap-2">
        <Link href={`/admin/edit-product/${product._id}`}>
          <PenBox
            className=" hover:scale-110 duration-200 cursor-pointer"
            size={20}
          />
        </Link>
        <Trash2
          onClick={handleDeleteProduct}
          className=" hover:scale-110 duration-200 cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
}
