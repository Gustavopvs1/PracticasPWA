const promesaConTimeout = (promesa, tiempoLimite) => {
    return new Promise((resolve, reject) => {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(`Se agotó el tiempo después de ${tiempoLimite} milisegundos`);
            }, tiempoLimite);
        });

        Promise.race([promesa, timeoutPromise])
            .then(resolve)
            .catch(reject);
    });
};

const ejecutarConTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Operación completada después de ${ms} milisegundos`);
        }, ms);
    });
};

const tiempoLimite = 100;

promesaConTimeout(ejecutarConTimeout(tiempoLimite), tiempoLimite)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    });

