/****** Video 1 - Generics  *******/
function identity<T>(x: T): T {
  return x;
}

let output = identity<string>("abhay");
let output2 = identity(123);

function useDebounceValue<T>(value: T, delay = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

useDebounceValue("abhay").then((value) => {
  console.log(value);
});

interface idInfo {
  id: string;
}

function getId<T extends idInfo>(mainInfo: T): string {
  return mainInfo.id;
}

let userId = getId({ id: "123", age: 20 });

function mapArray<T, U>(arr: T[], fn: (t: T) => U): U[] {
  return arr.map(fn);
}

let result = mapArray([1, 2, 3], (x) => x * 2);

/****** Video 2 - Higher Order Type *******/

// Higher Order Function (you know this)
const numbers = [1, 2, 3];
const doubled = numbers.map((x) => x * 2); // [2, 4, 6]

// Higher Order Type (something crazy)
type WrapInArray<T> = T[];

type StringArray = WrapInArray<string>;
type NumberArray = WrapInArray<number>;

/****** Video 3 - Higher Order Type (Real World Example) *******/

// Without Higher Order Type (repetitive non DRY)
interface ButtonProps {
  text: string;
  onClick: () => void;
}

interface OptionalButtonProps {
  text?: string;
  onClick?: () => void;
}
interface ReadonlyButtonProps {
  readonly text: string;
  readonly onClick: () => void;
}

// With Higher Order Type (crazy stuff!)
type MakeOptional<T> = { [K in keyof T]?: T[K] };
type MakeReadonly<T> = { readonly [K in keyof T]: T[K] };

type OptionalButton = MakeOptional<ButtonProps>; //
type ReadonlyButton = MakeReadonly<ButtonProps>; //

/****** Video 4 - MetaProgramming With HOTs (Real World Example) *******/

// Your API responses
interface User {
  id: number;
  name: string;
  email: string;
}
interface Product {
  id: number;
  title: string;
  price: number;
}

// Instead of manually writing:

// interface UserResponse
// { data: User; loading: boolean; error: string | null }

// interface ProductResponse
// { data: Product; loading: boolean; error: string | null }

// Let types write types for you!
type ApiResponse<T> = {
  data: T;
  loading: boolean;
  error: string | null;
};

type UserResponse = ApiResponse<User>; // Generated automatically!
type ProductResponse = ApiResponse<Product>; // Generated automatically!
