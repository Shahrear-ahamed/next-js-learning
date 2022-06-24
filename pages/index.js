import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();

  const handleClick = () => {
    console.log("Going to product page");
    route.push("/product");
  };
  return (
    <>
      <h1>Home Component</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <a href="https://www.youtube.com/" target="blank">
        Youtube
      </a>
      <button onClick={handleClick}>Product</button>
    </>
  );
}
