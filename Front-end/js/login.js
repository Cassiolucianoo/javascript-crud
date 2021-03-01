$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault()
        var username = $("#username").val()
        var password = $("#password").val()
        const apiUrl = 'http://localhost:5000/login'
        const logincompleto = document.querySelector('#Login')

        let auth = btoa(username + ":" + password);


        fetch(apiUrl, {
            headers: {
                'Authorization': 'Basic ' + auth
            }
        })
            .then(function (data) {
                return data.json()
            })
            .then(function (data) {
                $("#username").val("")
                $("#password").val("")
                if (data.message == "Credenciais erradas") {
                    alert("credenciais erradas")
                }
                else {

                    fetch(apiUrl)
                        .then(resposta => resposta.json())
                        .then(clientesApi => clientesApi.forEach(login =>
                            logincompleto.innerHTML += `<li>
                            nome: ${login.nome} 
                            cpf: ${login.password} 
                            </li><br>`)
                        )
                        .catch(erro => logincompleto.innerHTML = `<p>Ops deu ruim alguma coisa ! :(</p>`)
                }
                console.log(data)
            })
    })
})

