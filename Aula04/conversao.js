const produto = {
    id: 1, 
    nome: 'Teclado',
    preco: 249.9,
    disponivel: true
}

console.log(typeof produto);
console.log(produto);

const texto = JSON.stringify(produto, null, 2);
console.log(texto);

console.log(typeof texto);
console.log(texto);

const reconstruindo = JSON.parse(texto)
console.log(typeof reconstruindo);
console.log(reconstruindo);
