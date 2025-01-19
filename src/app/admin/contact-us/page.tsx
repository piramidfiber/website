import { AdminNavBar, NavBar } from "@/components/layout";
import ContactUs from "@/models/contactUs";
import connect from "@/utils/dbConfig";
import React from "react";
import ContactInfoCard from "./contactInfoCard";

export const revalidate = 0;
const Page = async () => {
  connect();
  const contactData = await ContactUs.find({});
  return (
    <div className=" mt-8 gap-6 flex flex-col max-w-7xl mx-auto px-4">
      <AdminNavBar />
      <div className=" flex flex-col gap-1 ">
        {contactData.map((data, idx: number) => {
          return <ContactInfoCard idx={idx} key={idx} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Page;

// Order by contact info
