১. TypeScript-এ Interface এবং Type-এর পার্থক্য ?

TypeScript-এ আমরা interface এবং type alias দুইভাবেই object-এর shape বা type define করতে পারি। কিন্তু তাদের মধ্যে কিছু মূল পার্থক্য আছে:

## Interface:

1. Interface-এর নাম একই হলে একাধিক declare করা যায় এবং merge হয় ,

2. Interface সহজে extend বা implement করা যায়,

3. Interface মূলত object shape-এর জন্য,

4. বড় ও extensible object structure-এর জন্য |

## Type Alias :

1. Type alias merge করা যায় না,

2. Type alias extend করা যায় না, তবে intersections (&) ব্যবহার করা যায়,

3. Type alias দিয়ে union, tuple, primitive, বা complex type define করা যায়,

4. ছোট বা specific type, union, বা tuple-এর জন্য

Example =>>>

Interface
interface User {
name: string;
age: number;
}

Type Alias
type UserType = {
name: string;
age: number;
} | null; // union type allowed in type alias


*/-------------------------------------/*

২️. keyof keyword এর ব্যবহার

keyof keyword ব্যবহার করা হয় কোনো object type-এর property গুলোর নাম বের করার জন্য।
ফলাফল হয় string literal union type যা object-এর keys represent করে।

Example =>>>

interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; 

*/--Correct way--/*
const key: UserKeys = "name"; 
