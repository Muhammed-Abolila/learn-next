import Link from "next/link";
const FetchData = () => {
  return (
    <ul>
      <Link href="/fetch-data/client">
        <li>fetch data in client comp</li>
      </Link>
      <Link href="/fetch-data/server">
        <li>fetch data in server comp</li>
      </Link>
    </ul>
  );
};

export default FetchData;
