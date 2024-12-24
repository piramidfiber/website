"use client";
import { CATEGORY_DATA } from "@/const";
import { cn } from "@/utils/cn";
import { IProduct } from "@/utils/interface";
import { CircleX, LoaderCircle, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function EditProductForm(params: any) {
  const productData = JSON.parse(params.productData);
  const [productHeadlines, setProductHeadlines] = useState<any>(
    productData.description || []
  );
  const [newHeadline, setNewHeadline] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [headlineAdded, setHeadlineAdded] = useState(false);

  const [formData, setFormData] = useState<IProduct>({
    name: productData.name || "",
    moq: productData.moq || "",
    material: productData.material || "",
    color: productData.color || "",
    filling: productData.filling || "",
    pattern: productData.pattern || "",
    brand: productData.brand || "",
    washCare: productData.washCare || "",
    category: productData.category || "",
    origin: productData.origin || "",
    description: productData.description || [],
    productionCapacity: productData.productionCapacity || "",
    deliveryTime: productData.deliveryTime || "",
  });

  function handelChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleAddHeadline = () => {
    setLoading(true);
    setHeadlineAdded(false);
    if (newHeadline.trim()) {
      setProductHeadlines((prevHeadlines: any) => [
        ...prevHeadlines,
        newHeadline.trim(),
      ]);
      setNewHeadline(""); // Clear input after adding
    }
    setLoading(false);
  };

  function handleRemoveHeadline(index: number) {
    setHeadlineAdded(false);
    const newHeadlines = [...productHeadlines];
    newHeadlines.splice(index, 1);
    setProductHeadlines(newHeadlines);
  }

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/editExistingProduct", {
      body: JSON.stringify({
        formData,
        id: productData._id,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      router.push("/admin");
    } else {
      console.error("Error submitting form:", response.statusText);
    }
    setLoading(false);
  }

  return (
    <form className=" w-full flex-col flex gap-4">
      <div className="space-y-4 max-w-md w-full">
        <div className="">
          <p className="text-gray-600">Name</p>
          <input
            name="name"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.name}
            placeholder="Product Name"
          />
        </div>
        <div className="">
          <p className="text-gray-600">MOQ</p>
          <input
            name="moq"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.moq}
            placeholder="MOQ"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Material</p>
          <input
            name="material"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.material}
            placeholder="Material"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Color</p>
          <input
            name="color"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.color}
            placeholder="Color"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Filling</p>
          <input
            name="filling"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.filling}
            placeholder="Filling"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Pattern</p>
          <input
            name="pattern"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.pattern}
            placeholder="Pattern"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Brand</p>
          <input
            name="brand"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.brand}
            placeholder="Brand"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Wash Care</p>
          <input
            name="washCare"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.washCare}
            placeholder="Wash Care"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Origin</p>
          <input
            name="origin"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.origin}
            placeholder="Origin"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Production Capacity</p>
          <input
            name="productionCapacity"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.productionCapacity}
            placeholder="Production Capacity"
          />
        </div>
        <div className="">
          <p className="text-gray-600">Delivery Time</p>
          <input
            name="deliveryTime"
            onChange={handelChange}
            className="w-full p-1.5 border focus:ring-1 focus:outline-none rounded"
            type="text"
            value={formData.deliveryTime}
            placeholder="Delivery Time"
          />
        </div>
      </div>

      <label className=" w-full max-w-md flex flex-col">
        <span className="mb-1 text-gray-700">Category</span>
        <select
          onChange={(e) => handelChange(e)}
          className="rounded-md border border-gray-300 px-2 py-1.5 outline-none"
          name="category"
          value={formData.category}
        >
          <option value="">Select a category</option>
          {CATEGORY_DATA.map((category) => (
            <option key={category.slug} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <label className="flex max-w-xl flex-col">
        <span className="mb-1 text-gray-700">Product Description</span>
        <div className="flex">
          <input
            className="flex-grow rounded-md border border-gray-300 px-2 py-1.5 outline-none"
            type="text"
            value={newHeadline}
            onChange={(e) => setNewHeadline(e.target.value)} // Update local state
            placeholder="Enter product headline"
          />
          <button
            type="button"
            onClick={handleAddHeadline}
            className="ml-2 rounded bg-blue-500 px-4 py-1 text-center text-white"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-col rounded-md border py-1">
          {productHeadlines.map((headline: string, index: number) => (
            <div key={index} className="flex justify-between gap-2 px-2 py-1">
              {headline}{" "}
              <p
                onClick={() => handleRemoveHeadline(index)}
                className="cursor-pointer text-gray-600"
              >
                <CircleX />
              </p>
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            setFormData({ ...formData, description: productHeadlines });
            setHeadlineAdded(true);
          }}
          className={`mt-2 cursor-pointer rounded px-2 py-1.5 text-center font-medium ${headlineAdded ? "bg-red-300 text-red-800" : "bg-blue-300 text-blue-800"}`}
        >
          Add Description to product
        </div>
      </label>

      <button
        type="submit"
        className="mt-2 rounded bg-blue-500 px-4 py-1 text-center text-white"
        disabled={loading}
        onClick={(e) => handleFormSubmit(e)}
      >
        {loading ? (
          <LoaderCircle className=" animate-spin" />
        ) : (
          <p>Edit Response</p>
        )}
      </button>
    </form>
  );
}

export default EditProductForm;
