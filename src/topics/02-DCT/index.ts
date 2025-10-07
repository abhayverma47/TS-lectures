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
