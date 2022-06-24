import { useRouter } from "next/router";

export default function ProductDetails() {
  const route = useRouter();
  const { productId } = route.query;
  console.log(productId);
  return (
    <>
      <h1>This is product details page</h1>
      <h3>Our product is {productId}</h3>
    </>
  );
}
