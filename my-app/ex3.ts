// 제네릭
// 타입을 정의하지 않고 있다가 실행할 때 정해준다!
// 에러 체크도 가능

function someFunction<T>(a: T): T {
  return a;
}

someFunction<number>(1);
// someFunction<string>(1); // 에러 체크
someFunction<string>("a");