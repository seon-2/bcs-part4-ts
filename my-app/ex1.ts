// type과 interface

let Info1: { name: string; age: number } = {
  name: "seon",
  age: 100,
};

let Info2: { name: string; age: number } = {
  name: "andrew",
  age: 200,
};

// 같은 타입을 여러 번 쓸 경우 type으로 중복을 방지할 수 있다.

type Tinfo = { name: string; age: number };

let Info3: Tinfo = {
  name: "josh",
  age: 300,
};
