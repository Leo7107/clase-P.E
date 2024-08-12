const readline = require('readline')

const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function celsiusF(celsius){
    return (celsius *9/5) +32;
}

rl.question('Ingrese la temperatura en grados Celsius:', (respuesta) =>{
    const Celsius= parseFloat(respuesta);
    const fahrenheit = celsiusF(Celsius);
    console.log(`${Celsius}°C es igual a ${fahrenheit}°F`);
    rl.close();
}, ) 