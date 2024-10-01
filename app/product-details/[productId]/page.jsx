export async function generateMetadata({params}){
  const id = params.productId;
  const product = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then((res) => res.json());
  return {
    title: product[0]?.name,
    description:product[0]?.body
  }
}
const productDetails = ({params}) => {
  return (
    <div>product details of product id {params.productId}</div>
  )
}
export default productDetails