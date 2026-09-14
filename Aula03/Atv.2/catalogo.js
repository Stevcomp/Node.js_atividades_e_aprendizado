const ferramentas = [
  { codigo: 'MED-01', nome: 'Paquímetro', categoria: 'Medição', estoque: 6 },
  { codigo: 'COR-02', nome: 'Alicate de corte', categoria: 'Corte', estoque: 9 },
  { codigo: 'MED-03', nome: 'Trena', categoria: 'Medição', estoque: 4 }
];

export function listarFerramentas(categoria) {
  const filtradas = ferramentas.filter(item => item.categoria === categoria);

  if (filtradas.length === 0) {
    throw new Error('PENDENTE: implemente o módulo de catálogo.');
  }
  return filtradas.map(item => ({ ...item }));
}










