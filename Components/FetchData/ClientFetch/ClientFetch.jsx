"use client"
import { useEffect, useState } from "react";
const ClientFetch = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let data = await response.json();
      setData(data);
    };
    useEffect(() => {
      getData();
    }, []);
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((data, index) => (
          <div key={index}>
            <div>{data.userId}</div>
            <h6>{data.title}</h6>
            <p>{data.body}</p>
          </div>
        ))}
    </>
  );
};

export default ClientFetch;
