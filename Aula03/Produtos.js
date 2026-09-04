
export default class Produto {
  constructor({ id, nome, preco, estoque = 0 }) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new TypeError("O id não pode ser 0 ou não inteiro");
    }
    if (typeof nome !== "string" || nome.trim() === "") {
      throw new TypeError("Nome é obrigatório");
    }
    if (!Number.isFinite(preco) || preco < 0) {
      throw new TypeError("Preço inválido");
    }
    if (!Number.isInteger(estoque) || estoque < 0) {
      throw new TypeError("Estoque inválido");
    }
    Object.assign(this, {
      id,
      nome: nome.trim(),
      preco,
      estoque,
    });
  }
  retirar(quantidade) {
    if (!Number.isInteger(quantidade) || quantidade <= 0) {
      throw new RangeError("Quantidade de saída inválida");
    }
    if (quantidade > this.estoque) {
      throw new RangeError("Estoque insuficiente");
    }
    this.estoque -= quantidade;
  }
}