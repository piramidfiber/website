"use client";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ContactInfoCard = ({ data, idx }: any) => {
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleContactDelete() {
    setLoading(true);

    await fetch("/api/deleteContactUs", {
      body: JSON.stringify({
        id: data._id,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.refresh();
    setLoading(false);
  }

  return (
    <div className="  border">
      <div
        key={idx}
        onClick={() => setShowMsg((prev) => !prev)}
        className="bg-gray-100 py-1.5 px-3 cursor-pointer items-center grid grid-cols-12"
      >
        <p>{idx + 1}</p>
        <div className=" col-span-10">{data.name}</div>
        {loading ? (
          <LoaderCircle size={20} className=" animate-spin" />
        ) : (
          <Trash2
            onClick={handleContactDelete}
            className=" hover:scale-110 duration-200 cursor-pointer"
            size={20}
            color="#333"
          />
        )}
      </div>
      {showMsg && (
        <p className=" pt-1 pb-4 text-gray-700 px-3">{data.message}</p>
      )}
    </div>
  );
};

export default ContactInfoCard;
