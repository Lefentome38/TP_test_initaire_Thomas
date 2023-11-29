export function puissance(a: number, b: number){
    let somme = a

    if (b === 0) {
        return somme  = 1
    }
    if (a === 0) {
        return somme  = 0
    }
    
    for (let i = 1; i < b; i++) {
        somme *= a
    }

    if(Math.sign(a) === Math.sign(b)){
        return somme;
    }
    else {
        return -somme;
    }
    // return somme
};

