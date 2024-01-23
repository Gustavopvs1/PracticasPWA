const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject(numero + 1);
        }, 300);
    });
}
const sumarRapido = (numero) =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(numero + 1);
        }, 300);
    });
}

//Promise.race compite entre las promesas y devuelve la primera que resuelva
//Si una falla, falla todo
Promise.race([sumarLento(10), sumarRapido(20)])
    .then(respuestas =>{
        console.log(respuestas);
    }).catch(console.log);