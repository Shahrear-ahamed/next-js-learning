import Link from "next/link";

export default function Product() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/1" replace>
          <a>Product 1</a>
        </Link>
      </h2>
    </>
  );
}
