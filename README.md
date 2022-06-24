Learn Next js

### Nested Route

### Dynamic Route

Here i make a folder with the name of [Product]. then if i hit /product then inside product folder index.js file will be appear. after that if we set a file like this [productId].js then it will be dynamic route page. so now if we type /product/1 or product/100 however it is, this [productId].js page will be shown here.

Note That: On this [product] folder if we set any file and if we try to set like /product/food then this food.js file will be appear. if we search other things but this name file are not exist then this fill will be appear on dynamic file.
We can access our expected id with the help of useRouter() Hook;

import { useRouter } from "next/router";
const route = useRouter();
const { productId } = route.query;
console.log(route.query);

### Nested Dynamic Route

So for that we need to make a dynamic folder and make a file named index.js so this file will be show us our expected dynamic data when we learn Dynamic route section.
Now we make a folder called [review] in this folder we make a file [reviewId].js so we can access our expected nested dynamic data.
And as it is same we can use our page like dynamic route.

import { useRouter } from "next/router";
const route = useRouter();
const { productId, reviewId } = route.query;
console.log(route.query);

### Catch all route

Next time will be implement soon

### Link Component

For SPA we should make a navigate link without reloading, so for that Next.js help us to use Link component for navigate pages without reloading.

import Link from "next/link";
export default function Home() {
return (
<>
<Link href="/blog">
<a>Blog</a>
</Link>
</>
);
}

### Onclick Redirect or Navigate Programmatically

when we want to click and navigate then we should use useRouter() hook. then we can declare it as a variable and use variableName.push("/linkName") or variableName.replace("/linkName");

## Router Summary

1. Page based routing mechanism - Pages are associated with a route based on their file name.
2. Nested routes - Nested folder structure, files will be automatically routed in the same way in the url.
3. Dynamic Routes - can be created by adding square brackets to a page name.
4. Catch all routes - add three dots inside square brackets to create a catch all route. Helpful when you want different URLs for the same page layout or even you're working with pages where some of the route parameters are optional.
5. Link component to navigate on click of an element.
6. useRouter hook's router.push method to navigate programmatically.

### Custom 404 page

For making a custom 404 Page not found page we should make a file named [404.js](""). This file will be show our custom designed 404 page
