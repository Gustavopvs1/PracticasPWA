let user = {
    name: 'Gustavo',
    age: 25
}
fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error de peticion')
        console.log(error)
    })