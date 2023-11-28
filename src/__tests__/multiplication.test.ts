import { describe, expect, test } from 'vitest'
import { sum_multiplication } from '../modules/mutiplication';

describe("mutiplication", () => {
    
    test("multiplication simple",() => {
        expect(sum_multiplication(2,3)).toEqual(6)
    })    

    test("multi zero",() => {
        expect(sum_multiplication(2,0)).toEqual(0)
    })

    describe("multi avec 1", () => {
        test("premier multi de 1",() => {
            expect(sum_multiplication(1,2)).toEqual(2)
        }) 
        test("deuxieme multi de 1",() => {
            expect(sum_multiplication(2,1)).toEqual(2)
        })
    })

    describe("négatif", () => {
        describe('position négatif', () => {
            test("premier négatif",() => {
                expect(sum_multiplication(-2,2)).toEqual(-4)
            }) 
        
            test("deuxieme négatif",() => {
                expect(sum_multiplication(2,-2)).toEqual(-4)
            }) 
        })
        test("avec deux négatifs",() => {
            expect(sum_multiplication(-2,-2)).toEqual(4)
        }) 
    })


});