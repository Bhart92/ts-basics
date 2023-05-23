export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

type mutationFunction = (v: number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: mutationFunction
): number[] {
  return numbers.map(mutate);
}

const myNewMutateFunc: mutationFunction = (v: number) => v;
console.log(arrayMutate([1, 2, 3], (v) => v * 10));

type adderFunc = (val: number) => number;
export function createAdder(num: number): adderFunc {
  return (val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
