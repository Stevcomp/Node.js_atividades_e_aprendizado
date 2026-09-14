export function formatarMoeda(valor) {
  if (!Number.isFinite(valor)) {
    throw new Error('PENDENTE: implemente o módulo formatarMoeda.');
  }
  return new Intl.NumberFormat('pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
}

