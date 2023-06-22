// type 확장
type TCreature = {
  name: string;
  level: number;
};

type THuman = TCreature & {
  age: number;
};

// interface 확장
interface ICreature {
  name: string;
  level: number;
}

interface IHuman extends ICreature {
  age: number;
}
