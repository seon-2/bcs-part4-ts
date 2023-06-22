// 제네릭

// function someFunction(a: number): number {
//   return a;
// }

// 타입만 바꿔야 할 경우
function someNumberFunction(a: number): number {
  return a;
}

function someStringFunction(a: string): string {
  return a;
}

someNumberFunction(1);

someStringFunction("a");
// 재사용성 떨어짐