const apiUrl = 'http://localhost:5000/clientes'
const listaClientes = document.querySelector('#Clientes')

fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clientesApi => clientesApi.forEach(cliente => 
    listaClientes.innerHTML += `<li>
    nome: ${cliente.nome} 
    cpf: ${cliente.cpf} 
    Telefone: ${cliente.telefone} 
    Endereço: ${cliente.end} 
    </li><br>`)
  )
  .catch(erro => listaClientes.innerHTML = `<p>Ops deu ruim alguma coisa ! :(</p>`)