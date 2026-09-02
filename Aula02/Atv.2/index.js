const catalogoDaBiblioteca = [
  { tombo: 'L-101', titulo: 'JavaScript Essencial', tipo: 'Livro', disponivel: true },
  { tombo: 'R-205', titulo: 'Tecnologia em Foco', tipo: 'Revista', disponivel: true },
  { tombo: 'L-309', titulo: 'Algoritmos na Prática', tipo: 'Livro', disponivel: false }
];

const tipoDesejado = process.argv[2] || 'livro';


const itemFiltrado = catalogoDaBiblioteca.filter(
  (item) => item.disponivel && item.tipo === tipoDesejado);
if (itemFiltrado.length === 0) {
  console.log(`Nenhum material disponível para ${tipoDesejado}.`)
  process.exitCode = 1;
}

const resultadoFiltro = itemFiltrado.map(({ tombo, titulo }) => ({ tombo, titulo }));
console.log(resultadoFiltro);