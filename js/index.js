const apiUrl= 'http://localhost:5000/clientes'
const clientes = [{nome: 'teste',cpf: '000000000000'}]
const listaClientes = document.querySelector('#clientes')



clientes.forEach(cliente => listaClientes,innerHTML += 
    (`<li>nome: ${cliente.nome} cpf: ${cliente.cpf}</li>`)
)
