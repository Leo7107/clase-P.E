const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function maximoDeTres(n1,n2,n3){
    return Math.max(n1,n2,n3)
}

rl.question('Ingrese el primer número:', (respuesta1)=>{
    rl.question('Ingrese el segundo número:', (respuesta2)=>{
        rl.question('Ingrese el tercer número', (respuesta3)=>{

            const num1 = parseInt(respuesta1)
            const num2 = parseInt(respuesta2)
            const num3 = parseInt(respuesta3)
            //llamando a la función
            const maximo = maximoDeTres(num1,num2, num3);
            //Salda de la información 
            console.log(` el número mayor entre ${num1}, ${num2} y ${num3} es ${maximo}`);

        })
    })
})