type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  // set initial state
  let str: string = initial;
  // return tuple
  return [
    // return initial str
    () => str,
    // take new str
    (v: string) => {
      // set it to initial str var
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState("hello");
console.log(str1getter());
str1setter("goodbye");
console.log(str1getter());
