const apiUrl = 'http://localhost:5000/clientes'
const listaClientes = document.querySelector('#Clientes')
const nomes = document.querySelector('#Nomes')
const cpf= document.querySelector('#CPF')
const tel = document.querySelector('#TEL')
const end = document.querySelector('#End')

fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clienteApi => clienteApi.forEach(cliente =>

    listaClientes.innerHTML += ` 
      ${cliente.id}
     <br><br>`)
     
  )

  fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clienteApi => clienteApi.forEach(cliente =>

    nomes.innerHTML += ` 
      ${cliente.nome}
     <br><br>`   )
     
  )

  fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clienteApi => clienteApi.forEach(cliente =>

    cpf.innerHTML += ` 
      ${cliente.cpf}
     <br><br>`   )
     
  )

  fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clienteApi => clienteApi.forEach(cliente =>

    Tel.innerHTML += ` 
      ${cliente.telefone}
     <br><br>`   )
     
  )

  fetch(apiUrl)
  .then(resposta => resposta.json())
  .then(clienteApi => clienteApi.forEach(cliente =>

    End.innerHTML += ` 
      ${cliente.endereco}
     <br><br>`   )
     
  )
  
