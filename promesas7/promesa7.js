function realizarOperacionesAsincronas(funcionesPromesa) {
    return funcionesPromesa.reduce((acumulador, funcion) => {
      return acumulador.then(funcion);
    }, Promise.resolve());
  }
  
  // Ejemplo de uso:
  const promesa1 = () => new Promise(resolve => setTimeout(() => resolve('Operación 1 completada'), 1000));
  const promesa2 = () => new Promise(resolve => setTimeout(() => resolve('Operación 2 completada'), 500));
  const promesa3 = () => new Promise((resolve, reject) => setTimeout(() => reject('Operación 3 fallida'), 800));
  
  const arrayDeFunciones = [promesa1, promesa2, promesa3];
  
  realizarOperacionesAsincronas(arrayDeFunciones)
    .then(resultado => console.log('Todas las operaciones completadas:', resultado))
    .catch(error => console.error('Error:', error));
  