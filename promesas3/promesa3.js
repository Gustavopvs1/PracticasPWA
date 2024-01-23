const cargarDatosDeApi = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(`Error al cargar datos: ${error.message}`);
        })
    });
}

const apiUrl = 'https://fakestoreapi.com/products/1';
cargarDatosDeApi(apiUrl)
    .then(data => {
        console.log("Datos cargados:", data);
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