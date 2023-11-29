export function sum_multiplication(a: number, b: number){
    let somme = 0

    if(Math.abs(a) === 0 || Math.abs(b) === 0){
        return 0
    }
    
    for (let i = 0; i < Math.abs(b); i++) {
        somme += Math.abs(a) 
    }

    if(Math.sign(a) === Math.sign(b)){
        return somme;
    }
    else {
        return -somme;
    }
};

