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

###