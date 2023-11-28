import { describe, expect, test } from 'vitest'

const grape_1 = {
    name_fruit: "GrapeBanane",
    nbr_fruit: 12
}

const grape_2 = {
    name_fruit: "GrapeRaisin",
    nbr_fruit: 12
}

describe("vérification des grapes de fruit", () => {

    test("le nombre de fruit sont égaux (nbr)", () => {
        expect(grape_1.nbr_fruit).toEqual(grape_2.nbr_fruit);
    });

    test("le nom des grape sont différant (name)", () => {
    expect(grape_1.name_fruit).not.toEqual(grape_2.name_fruit);
    });
      
});