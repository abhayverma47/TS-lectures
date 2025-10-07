/****** Video 1 - What are DCTs *******/

// Conditional types ask questions about types
type IsString<T> = T extends string ? "YES" : "NO";

// Works as expected with single types
type Test1 = IsString<string>; // "YES" ✅
type Test2 = IsString<number>; // "NO" ✅

// But watch what happens with unions...
type Test3 = IsString<string | number>;
// Expected: "NO"(union is not exactly string)
// Actual: "YES" | "NO"

// This is DISTRIBUTION in action!

/****** Video 2 - Magic Of DCTs *******/

// Form validation for different input types
type Validate<T> = T extends string
  ? { type: "text"; value: T; minLength: number }
  : T extends number
  ? { type: "number"; value: T; min: number; max: number }
  : { type: "unknown"; value: T };

// Here is our magic!
type InputValidation = Validate<string | number>;
// Result:
// { type: "text"; value: string; minLength: number } |
// { type: "number"; value: number; min: number; max: number }

// Step-by-step what TypeScript does:
// 1. Takes string | number
// 2. Applies Validate<string>  -> first result
// 3. Applies Validate<number> -> second result
// 4. Unions the results -> final type
