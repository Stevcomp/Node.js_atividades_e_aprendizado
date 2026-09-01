const produtos = [
    { id: 1, nome: 'Mouse', preco: 79.99, categoria: 'Periféricos' },
    { id: 2, nome: 'Monitor', preco: 899.99, categoria: 'Vídeos' },
    { id: 3, nome: 'Teclado', preco: 119.99, categoria: 'Periféricos' }
];

// Mapear os nomes dos produtos usando o método map() que pega todos os registros e desestruturação de objetos:
const nomes = produtos.map(({ nome }) => nome);
console.log(nomes); // Saída: Somente o nome dos produtos [ 'Mouse', 'Monitor', 'Teclado' ]


// Filtragem por categoria dos produtos da categoria 'Periféricos' usando o método filter():
const perifericos = produtos.filter(
    ({ categoria }) => categoria === 'Periféricos'
);
console.log(perifericos); // Saída: Somente os produtos da categoria 'Periféricos' [{ id: 1, nome: 'Mouse', preco: 79.99, categoria: 'Periféricos' }, { id: 3, nome: 'Teclado', preco: 119.99, categoria: 'Periféricos' }]


// Encontrar o produto com id 2 usando o método find() que busca o somente 1 elemento de um array que satisfaz uma condição especificada:
const monitor = produtos.find(({ id }) => id === 2);
console.log(monitor); // Saída: O produto com id 2 { id: 2, nome: 'Monitor', preco: 899.99, categoria: 'Vídeos' }



const reajuste = produtos.filter(({ categoria }) => categoria === 'Periféricos')
    .map((produtos) => ({ ...produtos, preco: produtos.preco * 1.4 })
);
console.log({ produtos, reajuste });

