import ClientFetch from "@/Components/FetchData/ClientFetch/ClientFetch";
import FetchData from "@/Components/FetchData/FetchData";
import { Suspense } from "react";
const page = () => {
  return (
    <>
      <FetchData />
      <div>client component</div>
      <ClientFetch />
    </>
  );
};

export default page;
