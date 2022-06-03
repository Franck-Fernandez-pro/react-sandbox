export {};

// const last = (arr: Array<number>) => arr[arr.length - 1];

// const last = <T>(arr: Array<T>): T => arr[arr.length - 1];
function last<T>(arr: Array<T>): T {
  return arr[arr.length - 1];
}

// const a = last<number>([1, 2, 3]);
const a = last([1, 2, 3]);
const b = last(['a', 'b', 'c']);

// --------------------------------------------------
// const makeArray = (x: number) => [x]
// const makeArray = <X>(x: X): X[] => [x];
const makeArray = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y]; // multiple generics types

// const c = makeArray(5);
// const d = makeArray('a');
// const d = makeArray('a', 5);
// const d = makeArray(1, 'a');
const d = makeArray<string>('a', 1);

// --------------------------------------------------

// generic type but at least with firstName and lastName
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const e = makeFullName({ firstName: 'string', lastName: 'string', age: 28 });
// const f = makeFullName({ toto: 'string', lastName: 'string', age: 28 });

// --------------------------------------------------
interface Tab<T> {
  id: number;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;

// --------------------------------------------------