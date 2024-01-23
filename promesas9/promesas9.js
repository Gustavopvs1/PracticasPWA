function esperarNVeces(n) {
    return new Promise((resolve, reject) => {
      if (typeof n !== 'number' || n <= 0) {
        reject(new Error('El argumento debe ser un número entero positivo.'));
      }
  
      let tiempoTotal = 0;
  
      for (let i = 1; i <= n; i++) {
        tiempoTotal += i * 1000; // Cada espera se incrementa en i segundos
        setTimeout(() => {
          console.log(`He esperado ${i} veces.`);
          if (i === n) {
            resolve(`¡He esperado ${n} veces!`);
          }
        }, tiempoTotal);
      }
    });
  }
  
  // Ejemplo de uso:
  const n = 3;
  
  esperarNVeces(n)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error('Error:', error));
  