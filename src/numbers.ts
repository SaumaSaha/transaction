const sumOfNaturalNumbers = (n: number): number => (n * (n + 1)) / 2;

type NumberTuple = [number, number];

const zip = (numberList1: number[], numberList2: number[]): NumberTuple[] => {
  const zipped: NumberTuple[] = [];
  const zipSize = Math.min(numberList1.length, numberList2.length);

  for (let i = 0; i < zipSize; i++) {
    zipped.push([numberList1[i], numberList2[i]]);
  }

  return zipped;
};

// function* zip_(a1: any[],a2: any[]) {
//   for(let i=0; i<Math.min(a1.length,a2.length);) {
//     yield [a1[i],a2[i]]
//   }
// }

// [...zip_([1,2],[3,4])]

type Coordinate = { x: number; y: number };

const square = (n: number): number => n * n;

const distanceBetweenPoints = (p1: Coordinate, p2: Coordinate): number => {
  const deltaX = Math.abs(p1.x - p2.x);
  const deltaY = Math.abs(p1.y - p2.y);
  return Math.sqrt(square(deltaX) + square(deltaY));
};

type Circle = {
  center: Coordinate;
  radius: number;
};

const areaOfCircle = (circle: Circle): number => Math.PI * square(circle.radius);

const isPointInsideCircle = (circle: Circle, point: Coordinate): boolean => {
  const distance = distanceBetweenPoints(circle.center, point);
  return distance < circle.radius;
};

console.log(sumOfNaturalNumbers(6));
console.log(zip([1, 2], [3, 4]));
console.log(distanceBetweenPoints({ x: 0, y: 0 }, { x: 0, y: 3 }));

const circle1: Circle = {
  center: { x: 0, y: 0 },
  radius: 5,
};
console.log(areaOfCircle(circle1));

const circle2: Circle = {
  center: { x: 0, y: 0 },
  radius: 5,
};

const point1: Coordinate = { x: 0, y: 3 };
const point2: Coordinate = { x: 0, y: 7 };

console.log(isPointInsideCircle(circle2, point1));
console.log(isPointInsideCircle(circle2, point2));
