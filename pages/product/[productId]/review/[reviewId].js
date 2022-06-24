import { useRouter } from "next/router";
export default function reviewId() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const route = useRouter();
  const { productId, reviewId } = route.query;
  console.log(route.query);
  return (
    <>
      <h1>This is product details page</h1>
      <h3>Our product is {productId}</h3>
      <h3>Our Review is {reviewId}</h3>
    </>
  );
}
