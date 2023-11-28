import { describe, expect, test } from 'vitest'
import { sumSmallNumbers , sum} from '../modules/addition';

describe("Sum only for small numbers", () => {
  describe("errors on parameters", () => {
    test("Too big numbers ", () => {
      expect(() => sumSmallNumbers(10, 2)).toThrow(Error);
    });

    test("Too small numbers ", () => {
      expect(() => sumSmallNumbers(-10, 2)).toThrow("Your");
    });

    test("zero ", () => {
      expect(() => sumSmallNumbers(0, 1)).not.toThrow(Error);
    });    
    
    test("addition", () => {
      expect(() => sumSmallNumbers(4, 4)).not.toThrow(Error);
    });

  });

  describe("Small sum of valid numbers", () => {
    test("positives", () => {
      expect(sumSmallNumbers(0, 0)).toBe(0);
      expect(sumSmallNumbers(0, 9)).toBe(9);
      expect(sumSmallNumbers(1, 9)).toBe(10);
      expect(sumSmallNumbers(9, 9)).toBe(18);
    });
  });
});

//____________________________________________________________________________________________________ correction sans correction

// import {
  // sumSmallNumbers,
  // sum,
  // explodeNumbers,
  // fastSum,
  // explodeOneNumber,
// } from "../modules/addition";

// describe("Sum only for small numbers", () => {
//   describe("errors on parameters", () => {
//     test("Too big numbers ", () => {
//       expect(() => sumSmallNumbers(10)).toThrow(Error);
//     });

//     test("Too small numbers ", () => {
//       expect(() => sumSmallNumbers(-10)).toThrow(Error);
//     });

//     test("zero ", () => {
//       expect(() => sumSmallNumbers(0)).not.toThrow(Error);
//     });
//   });

//   describe("Small sum of valid numbers", () => {
//     test("positives", () => {
//       expect(sumSmallNumbers(0, 0)).toBe(0);
//       expect(sumSmallNumbers(0, 9)).toBe(9);
//       expect(sumSmallNumbers(1, 9)).toBe(10);
//       expect(sumSmallNumbers(9, 9)).toBe(18);
//     });
//   });
// });

describe("Sum of big numbers", () => {
  describe("result", () => {
    test("with two small numbers", () => {
      expect(sum(1, 1)).toEqual(2);
    });

    test("with one small numbers", () => {
      expect(sum(1, 10)).toEqual(11);
      expect(sum(10, 1)).toEqual(11);
    });

    test("same length", () => {
      expect(sum(10, 10)).toEqual(20);
      expect(sum(123, 456)).toEqual(579);
    });

    test("differents length", () => {
      expect(sum(10, 110)).toEqual(120);
      expect(sum(110, 10)).toEqual(120);
      expect(sum(11000000, 10)).toEqual(11000010);
    });

    test("negatives", () => {
      expect(sum(-10, -110)).toEqual(-120);
    });

    test("differents sign", () => {
      expect(() => sum(-10, 110)).toThrowError();
      expect(() => sum(-10, 9)).toThrowError();
    });

    test("retenues", () => {
      expect(sum(11, 19)).toEqual(30);
      expect(sum(12, 19)).toEqual(31);
      expect(sum(-12, -19)).toEqual(-31);
      expect(sum(9, 91)).toEqual(100);
      expect(sum(1, 99)).toEqual(100);
    });
  });
});

// describe("special capacities", () => {
//   test("zero sum", () => {
//     expect(fastSum(0, 0)).toEqual(0);
//     expect(fastSum(-0, 0)).toEqual(0);
//     expect(fastSum(0, -0)).toEqual(0);
//     expect(fastSum(0, 10)).toEqual(10);
//     expect(fastSum(10, 0)).toEqual(10);
//     expect(fastSum(10, 0)).toEqual(10);
//   });

//   test("zero results", () => {
//     expect(fastSum(-0, -0)).toEqual(0);
//     expect(fastSum(-999, 999)).toEqual(0);
//     expect(fastSum(999, -999)).toEqual(0);
//   });

//   test("negatives", () => {
//     expect(fastSum(-10, -10)).toEqual(-20);
//   });

//   test("mixed", () => {
//     expect(fastSum(10, -10)).toBe(0);
//     expect(() => fastSum(10, -11)).toThrowError();
//   });

//   test("not possible", () => {
//     expect(() => fastSum(10, 11)).toThrowError();
//     expect(() => fastSum(-10, 11)).toThrowError();
//     expect(() => fastSum(10, -11)).toThrowError();
//   });
// });

// describe('Sum of X elements', () => {
//     test('zero', () => {
//         expect(sum()).toEqual(0);
//     });

//     test('one', () => {
//         expect(sum(1)).toEqual(1);
//     });

//     test('three and more', () => {
//         expect(sum(1, 2, 3)).toEqual(6);
//         expect(sum(10, 10, 10, 10, 10)).toEqual(50);
//     });
// });
