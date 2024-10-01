const ServerFetch = async() => {
    let data;
    try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        data = await response.json();
    }catch(e){
        console.log(e)
    }
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
}

export default ServerFetch