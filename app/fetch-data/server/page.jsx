import FetchData from "@/Components/FetchData/FetchData";
import ServerFetch from "@/Components/FetchData/ServerFetch/ServerFetch";
const page = () => {
  return (
    <>
      <FetchData />
      <div>server component</div>
      <ServerFetch />
    </>
  );
};

export default page;
