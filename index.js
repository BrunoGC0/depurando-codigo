function calcularFatorial(numero){
    let resultado = 1

    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado
}

function imprimirFatorial(numero){
    const numeroNegativo = numero < 0

    if(numeroNegativo){
        console.log("O valor está incorreto.");
    }else{
        const fatorial = calcularFatorial(numero)
        console.log(`O valor fatorial de ${numero} é ${fatorial}`);
    }   
}

const numero = 5
imprimirFatorial(numero)
