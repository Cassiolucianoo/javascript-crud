var form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {

    e.preventDefault()
    var name = document.getElementById('name').value
    var cpf = document.getElementById('cpf').value
    var telefone = document.getElementById('telefone').value
    var endereco = document.getElementById('endereco').value


    //fetch post request
    fetch("http://localhost:5000/clientes", {
        method: 'POST',
        body: JSON.stringify({
            nome: name,
            cpf: cpf,
            telefone: telefone,
            endereco: endereco
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

    })
        .then(function (response) {
            return response.json()

        })
        .then(function (data) {
            console.log(data)

        })

})