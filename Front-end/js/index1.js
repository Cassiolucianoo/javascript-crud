const clientes = [{nome: ' teste ', cpf:' 0000000000 ',telefone:' 11 97746 - 0055 ',end:' Rua aguas de março 78 '}]

const listaClientes = document.querySelector('#Clientes')

clientes.forEach(cliente =>
    listaClientes.innerHTML += (`<li>
    nome: ${cliente.nome} 
    cpf: ${cliente.cpf} 
    Telefone: ${cliente.telefone} 
    Endereço: ${cliente.end} 
    </li>`)

)