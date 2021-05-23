var form = document.getElementById('formulario')

form.addEventListener('submit', function (e) {

    e.preventDefault()
    var id = document.getElementById('id').value

var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");

var raw = "\r\n    ";

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/clientes/"+id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
})