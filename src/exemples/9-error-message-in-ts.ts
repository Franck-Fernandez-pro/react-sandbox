// BEFORE
// export const deepEqualCompare = <Arg>(a: Arg, b: Arg): boolean => {
//   if (Array.isArray(a) || Array.isArray(b)) {
//     throw new Error("You can't compare two array using deepEqualCompare");
//   }

//   return a === b;
// };

// AFTER
export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? "Don't pass an array!" : Arg,
  b: Arg extends any[] ? "Don't pass an array!" : Arg
): boolean => a === b;

deepEqualCompare('a', 'b');
deepEqualCompare([], []);

// --------------------------------------------------------------
interface Letters {
  a: string;
  b: string;
  c: string;
}

// Without keyof
// type LettersAsUnion = "a" |"b" |"c"

// With keyof
type LettersAsUnion = keyof Letters;
const letters: LettersAsUnion = '';

// --------------------------------------------------------------
interface OtherLetters {
  a: number;
  b: string;
  c: {
    name: string;
  };
}

// With keyof
type OtherLettersAsUnion = OtherLetters[keyof OtherLetters];

const Otherletters: OtherLettersAsUnion = '';
