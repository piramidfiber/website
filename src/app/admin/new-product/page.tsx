"use client";
import { AdminNavBar } from "@/components/layout";
import { CATEGORY_DATA } from "@/const";
import { cn } from "@/utils/cn";
import { desc, form } from "framer-motion/client";
import { CircleX, LoaderCircle, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  return (
    <div className=" px-4 w-full pb-24 max-w-4xl mx-auto flex flex-col gap-6 mt-8">
      <AdminNavBar />
      <NewProductForm />
    </div>
  );
};

export default Page;

function NewProductForm() {
  const [images, setImages] = useState<any>([]);
  const [imageAddedToBucket, setImageAddedToBucket] = useState(false);
  const [productHeadlines, setProductHeadlines] = useState<any>([]);
  const [newHeadline, setNewHeadline] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [headlineAdded, setHeadlineAdded] = useState(false);
  interface IProduct {
    name: string;
    moq: string;
    material: string;
    color: string;
    filling: string;
    pattern: string;
    brand: string;
    washCare: string;
    category: string;
    origin: string;
    description: string[];
    productionCapacity: string;
    deliveryTime: string;
    images: string[];
  }

  const [formData, setFormData] = useState<IProduct>({
    name: "",
    moq: "",
    material: "",
    color: "",
    filling: "",
    pattern: "",
    brand: "",
    washCare: "",
    category: "",
    origin: "",
    description: [],
    productionCapacity: "",
    deliveryTime: "",
    images: [],
  });

  function handelChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function addImage(event: any) {
    setImages([...images, ...event.target.files]);
  }

  async function handleImageUploadToS3() {
    setLoading(true);
    let imageLinks: any = [];
    function getImageName(url: string) {
      const parts = url.split("/");
      const lastPart = parts[parts.length - 1];
      const imageName = lastPart.split("?")[0];
      return `https://s3.ap-south-1.amazonaws.com/cozzy.corner/filltex/${imageName}`;
    }

    const response = await fetch("/api/getImageUploadUrl", {
      method: "POST",
      body: JSON.stringify({
        count: images.length,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();

      for (let i = 0; i < images.length; i++) {
        const responst = await fetch(data[i], {
          method: "PUT",
          body: images[i],
          headers: {
            "Content-Type": "image/jpeg",
          },
        });
        const imageS3Link = getImageName(data[i]);
        imageLinks.push(imageS3Link);
      }
    } else {
      console.error("Error submitting form:", response.statusText);
    }
    setFormData({ ...formData, images: imageLinks });
    setImageAddedToBucket(true);
    setLoading(false);
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
    if (formData.images.length != 0) {
      const response = await fetch("/api/addnewProductToDatabase", {
        body: JSON.stringify({
          formData,
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
    }
    setLoading(false);
  }

  return (
    <form className=" w-full flex-col flex gap-4">
      <div className=" flex gap-4 items-center">
        {images.map((image: any, index: number) => (
          <div key={index} className=" relative h-24 w-24">
            <img
              src={URL.createObjectURL(image)}
              alt="image"
              className=" h-24 w-24 object-cover rounded-lg"
            />
            <X
              onClick={() => setImages(images.filter((i: any) => i !== image))}
              size={20}
              className=" absolute rounded-full p-0.5 cursor-pointer -top-2 bg-black right-0"
              color="#fff"
            />
          </div>
        ))}
        <label className="h-16 w-16 cursor-pointer border-2 border-dashed flex items-center justify-center rounded-lg">
          <input type="file" onChange={(e) => addImage(e)} className="hidden" />
          <Plus size={20} />
        </label>
      </div>
      <div
        onClick={handleImageUploadToS3}
        className={cn(
          " py-1 px-2 bg-gray-100 rounded w-32 text-center cursor-pointer",
          imageAddedToBucket && "bg-green-200"
        )}
      >
        {loading ? (
          <LoaderCircle className=" animate-spin" />
        ) : (
          <p> Add images</p>
        )}
      </div>
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
          <p className="text-gray-600">MOQ(Minimum order Quantity)</p>
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
        {loading ? <LoaderCircle className=" animate-spin" /> : <p>Submit</p>}
      </button>
    </form>
  );
}
