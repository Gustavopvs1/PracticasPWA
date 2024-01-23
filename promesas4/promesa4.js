const ejecutarConTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Operacion completada despues de ${ms} milisegundos`);
        }, ms);
    });
}

const tiempoLimite = 2000;
ejecutarConTimeout(tiempoLimite)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    });

/* let promesaConError = new Promise((resolve, reject) => {
    reject("Algo salio mal...")
})

promesaConError.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
}); */