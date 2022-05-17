// Type any
// export const getDeepValue = (obj: any, firstKey: string, secondKey: string) => obj[firstKey][secondKey];

// Generic type
export const getDeepValue = <
  TObj,
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]
>(
  obj: TObj,
  firstKey: TFirstKey,
  secondKey: TSecondKey
) => obj[firstKey][secondKey];

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: '12',
    d: 18,
  },
};

const value = getDeepValue(obj, 'foo', 'a');
  