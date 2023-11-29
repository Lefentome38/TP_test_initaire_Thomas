import { describe, expect, test } from 'vitest'
import { puissance } from '../modules/pow';

describe("test puissance", () => {

    describe("position de la puissance", () =>{
        test('x avec puissance x', () => {
            expect(puissance(4,4)).toEqual(256) //256
        })
        test('x avec puissance 1', () => {
            expect(puissance(4,1)).toEqual(4) //4
        })
        test('1 avec puissance x', () => {
            expect(puissance(1,4)).toEqual(1) //1
        })
    })

    describe("avec des zéros", () => {
        test("x avec puissance 0", () => {
            expect(puissance(4,0)).toEqual(1) //1
        })
        test("0 avec puissance x", () => {
            expect(puissance(0,4)).toEqual(0) //0
        })
        test("0 avec puissance 0", () => {
            expect(puissance(0,0)).toEqual(1) //1
        })
        
        describe("négatif", () => {
            
            describe("zéro négatif", () => {
                test("x avec puissance -0", () => {
                    expect(puissance(4,-0)).toEqual(1) //1
                })
                test("-0 avec puissance x", () => {
                    expect(puissance(-0,4)).toEqual(0) //0
                })  
            })

            describe("puissance négatif", () => {
                test("-x avec puissance 0", () => {
                    expect(puissance(-4,0)).toEqual(-1) //-1
                })
                test("0 avec puissance -x", () => {
                    expect(puissance(0,-4)).toEqual(0) //infinity
                })  
            })

            describe("nombre et zéro négatif", () => {
                test("-0 avec puissance -x", () => {
                    expect(puissance(-0,-4)).toEqual(0) //infinity
                })
                test("-x avec puissance -0", () => {
                    expect(puissance(-4,-0)).toEqual(-1) //-1
                })
            })
        })
    })

    describe("avec les négatifs", () => {
        test("nombre négatif", () => {
            expect(puissance(-4,4)).toEqual(-256) //-256
        })
        test("puissance négatif", () => {
            expect(puissance(4,-4)).toEqual(0.00390625) //0.00390625
        })
        test("nombre et puissance négatifs", () => {
            expect(puissance(-4,-4)).toEqual(-0.00390625) //-0.00390625
        })
    })
});