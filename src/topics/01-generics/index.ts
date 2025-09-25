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
